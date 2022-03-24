import {useState, useEffect} from 'react'

function SearchContact() {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [keywords, setKeywords] = useState()
    const handleSubmit= (event) =>(
        event.preventDefault(),
        console.log(startDate),
        console.log(endDate),
        console.log(keywords)
    )

    const handleChange =(e)=>(
        setStartDate(e.target.value)
    )
    const handleEndChange =(e)=>(
        setEndDate(e.target.value)
    )

    const handleWordsChange=(e)=>(
        console.log(e.target.value),
        setKeywords(e.target.value)
    )
  return (
    <div className='topGap'>
        <h1 className='font-bold text-xl'>การจัดการ การติดต่อ</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-full xl:w-[140%] relative'>
            <div className='flex mt-10'>
                <div>
                    <p className='inputLabel'>วันเริ่มประกาศ</p>
                    <input type="date" id="start" onChange={handleChange} className="inputBar border-gray-200" />
                </div>
                <div className=' xl:mx-44 lg:mx-5'>
                    <p className='inputLabel'>วันสิ้นสุดประกาศ</p>
                    <input type="date" id="end" onChange={handleEndChange} className="inputBar border-gray-200" />
                </div>
            </div>
            <div className='mt-4 '>
                <p className='inputLabel'>พิมพ์คำค้นหา</p>
                <input type="text" placeholder='สอบถามข้อมูล' className='border-2 h-10 md:w-full rounded-md mb-4  border-gray-200' onChange={handleWordsChange}/>
            </div>
            <button type='submit' className='submitBtn bg-orange-400'>ค้นหา</button>
        </form>
    </div>
  )
}

export default SearchContact