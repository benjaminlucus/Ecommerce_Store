import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchFilterPractice = ({disabled}) => {
  return (
    <div className='relative w-full'>
      <div className='flex items-center '>
        <SearchIcon className='size-4 top-1/2 -translate-y-1/2 absolute left-3 text-neutral-500'/>
        <Input placeholder='Search Products' className='p-8 bg-white' disabled={disabled}/>
      </div>
    </div>
  )
}

export default SearchFilterPractice