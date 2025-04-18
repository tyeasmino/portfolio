import { Button } from '@/components/ui/button'
import React from 'react'

const DreamPage = () => {
  return (
    <div className=''>
        <h2 className='text-4xl font-bold'>Welcome to your dreamSetup</h2>

        <div className='my-6 flex justify-between gap-16'>
        <div className='w-1/3'>
            <div className='flex items-center justify-between bg-gray-300 p-3 rounded-md my-3'>
                <h3 className='font-semibold text-xl'>Education</h3>
                <Button className='px-6'>Add</Button>
            </div>
            <div className='flex items-center justify-between bg-indigo-100 p-3 rounded-md my-3'>
                <h3 className='font-semibold text-xl'>Training</h3>
                <Button className='px-6'>Add</Button>
            </div>
            <div className='flex items-center justify-between bg-gray-300 p-3 rounded-md my-3'>
                <h3 className='font-semibold text-xl'>Seminar</h3>
                <Button className='px-6'>Add</Button>
            </div>
        </div>

        <div className='w-2/3'>
            form
        </div>
        </div>
    </div>
  )
}

export default DreamPage