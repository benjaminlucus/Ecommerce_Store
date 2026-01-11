"use client"
import React, { useState, useRef, useEffect } from 'react'
import SubcategoryMenuPractice from "./SubcategoryMenuPractice"
import { Button } from '@/components/ui/button';

const CategoryDropdownPractice = ({ isActive, category, isNavigationHovered }) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null)


  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true)
    }
  }

  const onMouseLeave = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    console.log("Category loaded:", category);
  }, []);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={dropdownRef} className='relative'>
      <div>
        <Button variant="elevated" className={`bg-transparent text-black h-11 rounded-full border-transparent ${isActive && !isNavigationHovered && "bg-white border-primary"}`}>
          {category.name}
        </Button>

        {category.subcategories && category.subcategories.length > 0 &&
          <div className={`border-l-[10px] border-r-[10px] border-b-[10px] border-r-transparent border-l-transparent border-b-black w-0 h-0 absolute opacity-0 left-1/2 -translate-x-1/2 ${isOpen && "opacity-100"}`} />}
      </div>

      <SubcategoryMenuPractice category={category} isOpen={isOpen} />
    </div>
  )
}

export default CategoryDropdownPractice