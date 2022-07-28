import React from "react";
import { BiSearch } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { MdMoreVert } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { listData } from "../../data";

export default function ProductList() {
  return (
    <div className="w-full">
      <div className="bg-green-300 w-full h-[35%] flex items-center justify-center rounded-b-[40px] pb-40">
        {/* search space and add product button */}
        <div className="w-[72%] flex flex-row space-x-7">
          <div className="bg-white rounded-lg p-2 flex justify-end shadow-md w-full items-center">
            <BiSearch className="w-8 h-8 opacity-50" />
          </div>
          <div className=" flex flex-row  border-2 rounded-lg bg-white justify-center items-center w-[20%] space-x-2 shadow-md">
            <GrAddCircle className="h-7 w-7 opacity-50" />
            <button className="font-normal">Add Product</button>
          </div>
        </div>
      </div>
      {/* end of search space and add product button */}

      {/* filter type of product*/}
      <div className="w-[70%] flex items-center relative bottom-[170px]">
        <div className="w-full mx-60 relative">
          <div className="flex flex-row mt-5 w-full justify-evenly rounded-md font-medium space-x-4 bg-transparent">
            <div className="bg-slate-500 w-full h-10 text-center flex items-center justify-center rounded-lg text-white">
              <p>All</p>
            </div>
            <div className="bg-white w-full h-10 text-center flex items-center justify-center rounded-lg">
              <p>Vegetable</p>
            </div>
            <div className="bg-white w-full h-10 text-center flex items-center justify-center rounded-lg">
              <p>Fruit</p>
            </div>
            <div className="bg-white w-full h-10 text-center flex items-center justify-center rounded-lg">
              <p>Meat</p>
            </div>
          </div>
        </div>
      </div>
      {/* end of filter type of product */}

      {/* card go here*/}
      <div className="flex flex-row space-x-28 flex-wrap bottom-[115px] relative">
        {listData.map((list) => (
          <div
            className="w-[15%] h-[30%] border-2 ml-[14%] rounded-md bg-green-200 opacity-90"
            key={list.id}
          >
            <div className="w-full bg-white pb-3 flex flex-row rounded-t-md items-center border-b-2">
              <p className="font-normal items-center ml-[45%]">{list.name}</p>
              <MdMoreVert className="ml-[20%]" />
            </div>
            <section className="bg-green-200 flex flex-col justify-center items-center">
              <img src={list.img} alt="" className="w-20 h-20 mt-5" />
              <div className="flex flex-row space-x-6 mt-4">
                <span>
                  <p>Price</p>
                  <p>Source</p>
                  <p>Expire Date</p>
                </span>
                <span className="mr-28">
                  <p>{list.price}</p>
                  <p>{list.source}</p>
                  <p>{list.expire}</p>
                </span>
              </div>
              <div className="ml-[85%] mt-5 mb-2">
                <RiDeleteBin6Line className="w-6 h-6" />
              </div>
            </section>
          </div>
        ))}
      </div>
      {/* end of card */}

      {/* card of col2 */}

      <div className="flex flex-row space-x-28 flex-wrap bottom-[90px] relative">
        {listData.map((list) => (
          <div
            className="w-[15%] h-[30%] border-2 ml-[14%] rounded-md bg-green-200 opacity-90"
            key={list.id}
          >
            <div className="w-full bg-white pb-3 flex flex-row rounded-t-md items-center border-b-2">
              <p className="font-normal items-center ml-[45%]">{list.name}</p>
              <MdMoreVert className="ml-[20%]" />
            </div>
            <section className="bg-green-200 flex flex-col justify-center items-center">
              <img src={list.img} alt="" className="w-20 h-20 mt-5" />
              <div className="flex flex-row space-x-6 mt-4">
                <span>
                  <p>Price</p>
                  <p>Source</p>
                  <p>Expire Date</p>
                </span>
                <span className="mr-28">
                  <p>{list.price}</p>
                  <p>{list.source}</p>
                  <p>{list.expire}</p>
                </span>
              </div>
              <div className="ml-[85%] mt-5 mb-2">
                <RiDeleteBin6Line className="w-6 h-6" />
              </div>
            </section>
          </div>
        ))}
      </div>
      {/* end of card col2 */}
    </div>
  );
}
