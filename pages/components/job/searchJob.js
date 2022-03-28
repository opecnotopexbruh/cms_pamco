import Link from 'next/link'
import {useState} from 'react'


function SearchJob() {
    const [selects, setSelect] = useState()
    const [keywords, setKeywords] = useState()


    const selectChange = (e)=>(
        console.log(e.target.value),
        setSelect(e.target.value)
    )

    const keywordChange = (e) =>(
        console.log(e.target.value),
        setKeywords(e.target.value)
    )

    const handleSubmit = (event)=>(
        event.preventDefault(),
        console.log({keywords,selects})
    )

  return (
    <div className='topGap relative'>
        <h1 className='font-bold text-xl'>การจัดการ ผู้สมัครงาน</h1>
        <div className=' absolute -right-80'>
            <Link href="/createjob" ><a className='text-blue-900'>เพิ่มตำแหน่งงาน</a></Link>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-stretch w-[650px] relative '>
            <div className='flex mt-10'>
                <div>
                    <p className='inputLabel'>ตำแหน่งงาน</p>
                    <select onChange={selectChange} className="inputBar w-[206%] pl-1 rounded-md">
                        <option value="none" selected disabled hidden>เลือกตำแหน่งงาน</option>
                        <option>HR</option>
                        <option>Developer</option>
                        <option>Marketing</option>
                        <option>Office Admins</option>
                        <option>Desinger</option>
                    </select>
                </div>
                <div className='ml-60'>
                    <p className='inputLabel '>พิมพ์คำค้นหา</p>
                    <input type="text" placeholder='สอบถามข้อมูล' 
                    className='inputBar w-[206%] pl-1 rounded-md'
                    onChange={keywordChange}
                    />
                </div>
            </div>
            <button type='submit' className='submitBtn bg-orange-400 -bottom-10 -right-36 border-0'>ค้นหา</button>
        </form>
    </div>
  )
}

export default SearchJob