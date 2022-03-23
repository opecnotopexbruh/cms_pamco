import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'

function Pagination() {
  return (
    <div className='flex mb-10 mt-10 ml-4 justify-around w-[135%]'>
        <button className='hidden'>Back</button>
        <a className='pageBtn active'>1</a>
        <a className='pageBtn'>2</a>
        <a className='pageBtn'>3</a>
        <a className='pageBtn'>4</a>
        <a className='pageBtn'>5</a>
        <a className='pageBtn'>6</a>
        <a className='pageBtn'>7</a>
        <a className='pageBtn'>8</a>
        <button className='pageBtn nextBtn'><ChevronRightIcon className='h-6 w-6 font-thin'/></button>
    </div>
  )
}

export default Pagination