import React from "react";
import { BiSearch } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { VscAdd } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { categoriesData } from "../../data";

export default function Category() {
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
          <div className="w-[90%] bg-slate-200 h-10 border-2 flex justify-between items-center px-5 rounded-t-md font-semibold p-7">
            <p>Categories</p>
            <GrAddCircle className="h-7 w-7 opacity-50" />
          </div>
        </div>

        {categoriesData.map((categories) => (
          <div className="flex flex-row justify-center" key={categories.id}>
            <div className="w-[90%] bg-white h-10 border-2 flex justify-between items-center px-5 p-7">
              <VscAdd />
              <p>{categories.type}</p>
              <FiEdit />
              <RiDeleteBin6Line />
              <AiOutlineDown />
            </div>
          </div>
        ))}
      </div>
      {/* end of categories */}
    </div>
  );
}
