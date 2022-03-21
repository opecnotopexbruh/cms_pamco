import React from 'react'
import {useState, useEffect} from 'react'


function Contact() {
    
    
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const handleSubmit= (event) =>(
        event.preventDefault(),
        console.log(startDate),
        console.log(endDate)
    )

    const handleChange =(e)=>(
        setStartDate(e.target.value)
    )
  return (
    <div className='topGap '>
        <h1 className='font-bold text-xl'>การจัดการ การติดต่อ</h1>
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='flex '>
                <div>
                    <p>วันเริ่มประกาศ</p>
                    <input type="date" id="start" onChange={handleChange} />
                </div>
                <div>
                    <p>วันสิ้นสุดประกาศ</p>
                    <input type="date" id="end" onChange={handleChange}/>
                </div>
            </div>
            <div>
                <p>พิมพ์คำค้นหา</p>
                <input type="text" placeholder='สอบถามข้อมูล' className='border-2'/>
            </div>
            <button type='submit' className='border-2 w-52'>ค้นหา</button>
        </form>
    </div>
  )
}

export default Contact