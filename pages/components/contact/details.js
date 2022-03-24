function Details({ id, ...props }) {
  const { text, phoneNumber, email, callTimeFrom, callTimeTo } = { ...props };
  return (
    <div
      className={`${
        id % 2 == 0 ? `bg-gray-200` : `bg-white`
      } mb-20 h-52 w-[44.9%] absolute`}
    >
      <div className="flex relative h-20 ml-2">
        <span className="font-thin text-sm">
          รายละเอียดสอบถาม
          <div className=" absolute left-36 -top-0 h-20 w-[60%] border-2 border-gray-500 text-sm pt-2 pl-1 font-thin">
            {text}
          </div>
        </span>
      </div>

      <div className="flex w-full mt-4 ml-2">
        <span className=" font-thin " >ข้อมูลติดต่อกลับ</span>
        <div className="ml-10">
          <div className="flex">
            <span className="font-thin">เบอร์โทร:</span>
            <p className="ml-2 font-thin">{phoneNumber}</p>
            <span className="ml-2 font-thin">Email:</span>
            <a href="/" className="ml-2 hover:text-blue-700 font-thin">
              {email}
            </a>
          </div>

          <div className="flex mt-2">
            <span className="font-thin">ช่วงเวลาที่ให้สะดวกติดต่อกลับ:</span>
            <p className="ml-2 font-thin">{callTimeFrom}</p>
            <span className="ml-2 font-thin">ถึง</span>
            <p className="ml-2 font-thin">{callTimeTo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
