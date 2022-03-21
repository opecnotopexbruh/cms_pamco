import Link from "next/link"

function Menu() {
  return (
    <div className="bg-gray-200 flex justify-center pl-[200px] pt-[80px]">
      <div>
        <div>
          <h1 className=" text-xl font-bold text-blue-900 ">PAMCO</h1>
        </div>
        <hr className="hr"/>
        <div className="flex flex-col">
          <Link href="/" ><a className="linkNav">การจัดการ การติดต่อ</a></Link>
          <Link href="/jobs"><a className="linkNav">การจัดการ ผู้สมัครงาน</a></Link>
          <Link href="/news"><a className="linkNav">การจัดการข่าวสารและโปรโมชั่น</a></Link>
        </div>
        <hr className="hr" />
        <div>
          <Link href="/"><a className="text-gray-400 font-semibold text-lg">การจัดการผู้ใช้งาน</a></Link>
      </div>
      </div>
    </div>
  )
}

export default Menu