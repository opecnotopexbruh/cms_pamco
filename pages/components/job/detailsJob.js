import ToggleButton from 'react-toggle-button'

function Details({ id, ...props }) {
    const { text, phoneNumber, email, callTimeFrom, callTimeTo, isActive } = { ...props };
    return (
      <div
        className={`${
          id % 2 == 0 ? `bg-gray-200` : `bg-white`
        } mb-26 h-[100%] w-[53.2%] absolute`}
      >
        <div className="flex flex-col relative m-h-full ml-2">
            <h2 className="font-bold text-lg">รายละเอียด</h2>
            <div className="mt-2">
                <p className="font-thin text-base my-2">
                รายละเอียดย่อ: <span className="ml-2">{text}</span>
                </p>
                <p className="font-thin text-base">
                รายละเอียดการสมัครงาน: <span className="ml-2">
                <br/>
                1. วางแผนการตลาดและบริหารการตลาดทั้งระบบทุกช่องทางของกลุ่มสินค้าในแบรนด์ที่รับผิดชอบ <br/>
                2. ประเมินผลและวิเคราะห์แนวโน้มสภาพของตลาดกลุ่มสินค้าประเภทเครื่องสำอางค์ในอนาคต <br/>
                3. รับผิดชอบ ดูแลบริหารทีมงานให้ดำเนินตามเป้าหมายขององค์กร<br/>
                4. จัดทำแผนงาน ช่องทางการส่งเสริมการขาย แผนประชาสัมพันธ์พร้อมติดตามประเมินผล</span>
                </p>
                <p className="font-thin text-base">
                คุณสมบัติ: <span className="ml-2"> <br/>
                1.วุฒิการศึกษาระดับ ปริญญาตรี-ปริญญาโท ในสายงานที่เกี่ยวข้อง<br/>
                2.มีประสบการณ์ 5 ปี ขึ้นไป ในสายงาน Manager และมีความรู้เรื่องการบริหารทีม<br/>
                3.สามารถทำงานเป็นทีม มีภาวะความเป็นผู้นำ มีใจรักงานบริการ มีความอดทนต่อภาวะความกดดัน<br/>
                4.ขับรถได้จะพิจารณาเป็นพิเศษ ออกต่างจังหวัดได้เป็นครั้งคราว<br/>
                5.มีความอดทนและกล้าตัดสินใจ<br/>
                6.มีความรับผิดชอบต่องานที่ทำ</span>
                </p>
            </div>

        </div>
        <div className="flex w-full ml-2 mt-2">
          <span className=" font-thin ml " >ช่วงเวลาเปิดรับสมัคร</span>
          <div className="ml-4">
            <div className="flex">
              <span className="font-thin">วันเริ่มต้น:</span>
              <p className="ml-2 font-thin">{callTimeFrom} </p>
              <span className="ml-2 font-thin">วันสิ้นสุด</span>
              <p className="ml-2 font-thin">{callTimeTo} </p>
            </div>
            <div className="flex">
              <span className="font-thin">เวลาทำงาน:</span>
              <p className="ml-2 font-thin">{callTimeFrom} </p>
              <span className="ml-2 font-thin">วันสิ้นสุด</span>
              <p className="ml-2 font-thin">{callTimeTo} </p>
            </div>
          </div>
        </div>
        <div className="flex mt-2 ml-2">
            <span className="">Status:</span> 
            {isActive? <p className='text-green-500 ml-2'>Active</p> : <p className='text-red-500 ml-2'>Disable</p>}
        </div>
      </div>
    );
  }
  
  export default Details;
  