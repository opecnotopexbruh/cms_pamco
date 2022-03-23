function Details({ id, ...props }) {
  const { text, phoneNumber, email, callTimeFrom, callTimeTo } = { ...props };
  return (
    <div
      className={`${
        id % 2 == 0 ? `bg-gray-200` : `bg-white`
      } mb-24 h-52 w-[44.9%] absolute`}
    >
      <div className="flex relative  h-20 ml-2">
        <span>
          รายละเอียดสอบถาม
          <div className=" absolute left-52 -top-0 h-20 w-[50%] border-2 border-gray-700 text-sm font-thin pt-2 pl-0.5 ">
            {text}
          </div>
        </span>
      </div>
      <div className="flex w-full mt-4 ml-2">
        <span>ข้อมูลติดต่อกลับ</span>
        <div className="ml-10">
          <div className="flex">
            <span>เบอร์โทร:</span>
            <p className="ml-2">{phoneNumber}</p>
            <span className="ml-2">Email:</span>
            <a href="/" className="ml-2 hover:text-blue-700">
              {email}
            </a>
          </div>
          <div className="flex mt-2">
            <span>ช่วงเวลาที่ให้สะดวกติดต่อกลับ:</span>
            <p className="ml-2">{callTimeFrom}</p>
            <span className="ml-2">ถึง</span>
            <p className="ml-2">{callTimeTo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
