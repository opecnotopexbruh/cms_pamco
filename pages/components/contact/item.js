import { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Details from "./details";

function Item({id, name, no, createAt, topic, ...props }) {
  const newDate = new Date();
  const today = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
  const [isShow, setIsShow] = useState(false);

  const showDetails = () => (isShow ? setIsShow(false) : setIsShow(true));

  // const idx = 2;


  return (
    <>
      <tr
        className={`${id % 2 == 0 ? `bg-gray-200` : `bg-white`} h-20`}
      >
        <td colSpan="1" className=" w-10 font-thin">
          {no}
        </td>
        <td colSpan="1" className=" w-15 text-center font-thin">
          {name}
        </td>
        <td colSpan="1" className=" w-15 text-center font-thin">
          {topic}
        </td>
        <td colSpan="1" className=" w-15 text-center font-thin">
          {createAt}
        </td>
        <td colSpan="2" className=" w-40 relative">
          <SearchIcon
            onClick={showDetails}
            className="h-8 w-8 absolute right-3 top-7"
          />
        </td>
      </tr>
      <div className={`${isShow ? "block" : "hidden"} h-20 mb-32 w-full `}>
        <Details id={id} {...props}/>
      </div>
    </>
  );
}

export default Item;
