import React from "react";
import { BiSearch } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { VscAdd } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { categoriesData } from "../../data";
import { useState } from "react";
import ExtendedCardCategory from "./ExtendedCardCategory";
import ExtendedCardVegetable from "./ExtendedCardVegetable";

export default function Category() {
  const [clickedItem, setClickItem] = useState(false);

  function display() {
    setClickItem(true);
  }

  return (
    <div className="w-full">
      <div className="bg-green-300 w-full h-[35%] flex items-center justify-center rounded-b-[40px] pb-20">
        {/* search space and add product button */}
        <div className="bg-white rounded-lg w-[40%] p-2 flex justify-end shadow-md">
          <BiSearch className="w-8 h-8 opacity-50" />
        </div>
      </div>
      {/* categories */}
      <div className="relative bottom-[79px]">
        <div className="flex justify-center">
          <div className="w-[90%] bg-slate-200 h-10 border-2 flex justify-between items-center px-5 rounded-t-md font-semibold p-7 relative">
            <p>Categories</p>
            <GrAddCircle
              className="h-7 w-7 opacity-50 cursor-pointer"
              onClick={display}
            />
            {/* {clickedItem ? (
              <span className="absolute bg-white border-slate-100 border-2 outline-4 rounded-b-lg rounded-tl-lg p-6 font-semibold flex flex-col justify-center items-start space-y-2 right-14 top-4">
                <p>Enter Category Name</p>
                <div className="border-2 border-green-200 w-full"></div>
              </span>
            ) : (
              ""
            )} */}
          </div>
        </div>

        {categoriesData.map((categories) => (
          <div className="flex flex-row justify-center" key={categories.id}>
            <div className="w-[90%] bg-white h-10 border flex justify-between items-center p-7">
              <VscAdd onClick={display} className="cursor-pointer" />
              {clickedItem ? <ExtendedCardCategory /> : ""}
              <p className="w-10">{categories.type}</p>
              <FiEdit />
              <RiDeleteBin6Line />
              <AiOutlineDown onClick={display} />
            </div>
          </div>
        ))}
      </div>
      {clickedItem ? <ExtendedCardVegetable /> : ""}

      {/* end of categories */}
    </div>
  );
}
