import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { useState } from 'react'

function Pagination() {
    const [isBack, setIsBack] = useState(false)
    const handleBack = () =>(
        setIsBack(true)
    )
  return (
    <div className='flex mb-10 mt-10 mx-8 justify-center items-center w-[150%]'>
        <button className={`${isBack? `block`:`hidden`} pageBtn nextBtn active:active`}><ChevronRightIcon className='h-6 w-6 mx-3 font-thin rotate-180'/></button>
        <button className='pageBtn focus:active' onClick={handleBack}>1</button>
        <button className='pageBtn focus:active' onClick={handleBack}>2</button>
        <button className='pageBtn focus:active' onClick={handleBack}>3</button>
        <button className='pageBtn focus:active' onClick={handleBack}>4</button>
        <button className='pageBtn focus:active' onClick={handleBack}>5</button>
        <button className='pageBtn focus:active' onClick={handleBack}>6</button>
        <button className='pageBtn focus:active' onClick={handleBack}>7</button>
        <button className='pageBtn focus:active' onClick={handleBack}>8</button>
        <button className='pageBtn nextBtn active:active '><ChevronRightIcon className='h-6 w-6 font-thin'/></button>
    </div>
  )
}

export default Pagination