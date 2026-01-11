"use client"

import { Button } from "@/components/ui/button";
import CategoryDropdownPractice from "./CategoryDropdownPractice"
import React, { useEffect, useState, useRef } from 'react'
import { ListFilterIcon } from "lucide-react";

const CategoriesPractice = ({ data }) => {

  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const viewAllRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(data.count);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeCategory = "all"

  const activeCategoryIndex = data.findIndex((cat) => cat.slug === activeCategory);
  const isActiveCategoryHidden = activeCategoryIndex >= visibleCount && activeCategoryIndex !== -1;

  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current || !measureRef.current || !viewAllRef.current) return;

      const containerWidth = containerRef.current.ofsetWidth;
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
      setVisibleCount(visible)
    }

    const resizedObserver = new ResizeObserver(calculateVisible);

    resizedObserver.observe(containerRef.current);

    return () => resizedObserver.disconnect();
  }, [data.length])

  return (
    <div className='relative w-full'>
      <div className="absolute opacity-0 pointer-events-none" style={{ position: "fixed", top: -9999, left: -9999 }} ref={measureRef}>
        {data.map((item) => (
          <div key={item.id}>
            <CategoryDropdownPractice category={item} isActive={activeCategory === item.slug} isNavigationHovered={false} />
          </div>
        ))}
      </div>

      <div className="flex items-center flex-nowrap" ref={containerRef} onMouseEnter={() => setIsAnyHovered(true)} onMouseLeave={() => setIsAnyHovered(false)}>
        {data.slice(0, visibleCount).map((item) => (
          <div key={item.id}>
            <CategoryDropdownPractice category={item} isActive={activeCategory === item.slug} isNavigationHovered={isAnyHovered} />
          </div>
        ))}

        <div ref={viewAllRef} className="shrink-0">
          <Button className={`h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black ${isActiveCategoryHidden && !isAnyHovered && "bg-white border"}`}>
            View All
            <ListFilterIcon className="ml-2"/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPractice