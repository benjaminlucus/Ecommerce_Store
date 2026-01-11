"use client"

import CategoryDropdown from './CategoryDropdown'
import { ListFilterIcon } from "lucide-react";
import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/button';

const Categories = ({ data }) => {

  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const viewAllRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(data.length);
  const [isAnyHovered, setIsAnyHovered] = useState(false);

  const activeCategory = "all"
  const activeCategoryIndex = data.findIndex(cat => cat.slug === activeCategory);
  const isActiveCategoryHidden = activeCategoryIndex >= visibleCount && activeCategoryIndex !== -1;

  useEffect(() => {
    if (!containerRef.current || !measureRef.current || !viewAllRef.current) return;

    const calculateVisible = () => {
      if (!containerRef.current || !measureRef.current || !viewAllRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const viewAllWidth = viewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;

      const items = Array.from(measureRef.current.children);

      let totalWidth = 0;
      let visible = 0;

      for (const item of items) {
        const width = item.getBoundingClientRect().width;
        if (totalWidth + width > availableWidth) break;
        totalWidth += width;
        visible++;
      }

      setVisibleCount(visible);
    };

    // Initial calculation
    calculateVisible();

    // Listen for resize changes
    const observer = new ResizeObserver(calculateVisible);
    observer.observe(containerRef.current);
    observer.observe(viewAllRef.current);

    return () => observer.disconnect();
  }, [data]);

  return (
    <div className='relative w-full'>
      {/* Hidden measurement container */}
      <div
        className="absolute opacity-0 pointer-events-none"
        style={{ position: "fixed", top: -9999, left: -9999 }}
        ref={measureRef}
      >
        {data.map(category => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={activeCategory === category.slug}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>

      {/* Visible categories */}
      <div
        className='flex flex-nowrap items-center'
        ref={containerRef}
        onMouseEnter={() => setIsAnyHovered(true)}
        onMouseLeave={() => setIsAnyHovered(false)}
      >
        {data.slice(0, visibleCount).map(category => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={activeCategory === category.slug}
              isNavigationHovered={isAnyHovered}
            />
          </div>
        ))}
      </div>

      {/* View All button */}
      <div ref={viewAllRef} className="shrink-0">
        <Button
          className={`h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black ${
            !isActiveCategoryHidden && !isAnyHovered ? "bg-white border" : ""
          }`}
        >
          View All
          <ListFilterIcon className="ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default Categories;
