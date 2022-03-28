import { useState, useEffect } from "react";
import Modal from "react-modal";
import { SearchIcon } from "@heroicons/react/outline";
import Details from "./detailsJob";

function Item({ id, name, no, createAt, topic, ...props }) {

  const handleDelete = () => (console.log("Sure to delete?"), openModal());

  const [isShow, setIsShow] = useState(false);

  const showDetails = () => (isShow ? setIsShow(false) : setIsShow(true));

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteJobs=()=>(
    console.log('item deleted'),
    closeModal()
  )

  // const idx = 2;
  return (
    <>
      <tr className={`${id % 2 == 0 ? `bg-gray-200` : `bg-white`} h-20`}>
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
        <td colSpan="1" className=" w-15 text-center font-thin">
          {createAt}
        </td>
        <td colSpan="1" className=" w-40 relative">
          <SearchIcon
              onClick={showDetails}
              className=" flex items-center h-6 w-10 absolute left-5 top-8"
            />
          <a
            className="flex items-center h-4 w-10 absolute right-12 top-9 text-blue-700 border-r-2 border-blue-600 cursor-pointer"
            href="/editjob"
          >
            Edit
          </a>
          <button
            className="flex items-center  self-center h-4 w-8 absolute right-2 top-9 text-orange-400 "
            onClick={handleDelete}
          >
            ลบ
          </button>
        </td>
      </tr>
      {/* details box */}
      <div className={`${isShow ? "block" : "hidden"} h-96 mb-[24.9rem] w-full `}>
        <Details id={id} {...props}/>
      </div>

      {/* Modal beofore delete */}
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className=" h-40 w-96 bg-white absolute right-[500px] p-4 top-52 border-4 border-orange-200 flex flex-col items-center justify-around rounded-xl "
        >
          <p>Are you sure deleting {no} ?</p>
          <div className="flex w-60 justify-between">
            <button onClick={deleteJobs} className="border-2 border-orange-700 w-20 h-10 rounded-xl bg-red-600 text-white" >Confirm</button>
            <button onClick={closeModal} className="border-2 border-gray-700 w-20 h-10 rounded-xl ">Cancel</button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Item;
