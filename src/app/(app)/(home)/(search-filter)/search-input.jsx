import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Input } from '@/components/ui/input';


const SearchInput = ({disable}) => {
  return (
    <div className='flex items-ceter gap-2 w-full'>
        <div className='relative w-full'>
            <SearchIcon className='absolute left-3 top-1/2 size-4  -translate-y-1/2 text-neutral-500'/>
            <Input className="p-8" placeholder='Search Products' disable={disable}/>
        </div>
    </div>
  )
}

export default SearchInput