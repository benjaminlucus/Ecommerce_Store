import React from 'react'
import CategoryDropdown from './CategoryDropdown'

const Categories = ({ data }) => {
    return (
        <div className='relative w-full'>
            <div className='flex flex-nowrap items-center'>
                {data.map((category) => (
                    <div key={category.id}>
                        <CategoryDropdown category={category} isActive={false} isNavigationHovered={false} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories