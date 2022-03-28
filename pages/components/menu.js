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
          <Link href="/" ><a className="linkNav text-base focus:clicked">การจัดการ การติดต่อ</a></Link>
          <Link href="/jobs"><a className="linkNav text-base focus:clicked">การจัดการตำแหน่งงาน</a></Link>
          <Link href="/candidates"><a className="linkNav text-base focus:clicked">การจัดการผู้สมัครงาน</a></Link>
          <Link href="/news"><a className="linkNav text-base">การจัดการข่าวสารและโปรโมชั่น</a></Link>
        </div>
        <hr className="hr" />
        <div>
          <Link href="/"><a className="text-gray-400 text-base">การจัดการผู้ใช้งาน</a></Link>
      </div>
      </div>
    </div>
  )
}

export default Menu