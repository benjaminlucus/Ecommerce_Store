import Link from 'next/link';
import React from 'react'

const SubcategoryMenuPractice = ({ category, isOpen }) => {
if (!isOpen || !category?.subcategories?.length) return null;

  const backgroundColor = category.color || '#F5F5F5';

  return (
    <div className="top-7 absolute left-0 z-50 pt-3" >
      <div className='h-3 w-60' />
      <div className='w-60 rounded-md  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border translate-x-[2px] translate-y-[2px]' style={{backgroundColor: backgroundColor}}>
        <div className='flex flex-col rounded-md'>
          {category.subcategories.map((item)=>(
            <Link href="/" key={item.id} className='w-full hover:bg-black hover:text-white rounded-md cursor-pointer underline text-left font-medium  flex p-4 justify-between'>
            {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubcategoryMenuPractice