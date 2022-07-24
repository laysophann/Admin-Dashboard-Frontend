import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { productData } from "../../data";

export default function Table() {
  return (
    <div className="w-full">
      <div className="bg-green-300 w-full h-[35%] flex items-center justify-center rounded-b-[40px] pb-20">
        <div className="bg-white rounded-lg w-[40%] p-2 flex justify-end shadow-md">
          <BiSearch className="w-8 h-8 opacity-50" />
        </div>
      </div>
      <div className="w-full flex items-center relative bottom-[79px]">
        <div className="w-full mx-60 relative">
          <div className="flex flex-row mt-5w-full justify-evenly rounded-md font-medium space-x-1 bg-transparent">
            <div className="bg-slate-200 w-full h-10 text-center flex items-center justify-center rounded-tl-lg">
              <p>Product</p>
            </div>
            <div className="bg-slate-200 w-full h-10 text-center flex items-center justify-center">
              <p>Store</p>
            </div>
            <div className="bg-slate-200 w-full h-10 text-center flex items-center justify-center">
              <p>Location</p>
            </div>
            <div className="bg-slate-200 w-full h-10 text-center flex items-center justify-center rounded-tr-lg">
              <p>Time</p>
            </div>
          </div>
          {productData.map((product) => (
            <div
              key={product.id}
              className="flex flex-row w-full justify-evenly space-x-1 bg-white mt-3 border"
            >
              <div className="w-full h-10 text-center flex items-center justify-center rounded-tl-lg">
                <p>{product.name}</p>
              </div>
              <div className=" w-full h-10 text-center flex items-center justify-center">
                <p>{product.store}</p>
              </div>
              <div className="w-full h-10 text-center flex items-center justify-center">
                <p>{product.location}</p>
              </div>
              <div className="w-full h-10 text-center flex items-center justify-center rounded-tr-lg">
                <p>{product.time}</p>
              </div>
            </div>
          ))}

          {/* Scroll Next Item Icon */}
          <div className="absolute right-0 mt-3 animate-pulse animate-bounce">
            <BsChevronDoubleDown />
          </div>
        </div>

        {/* Export Button */}
        <div className="absolute top-0 right-32 border px-4 py-1 rounded-lg bg-white">
          <button>Export</button>
        </div>

        {/* Clear Button */}
        <div className="absolute bottom-0 right-32 border px-5 py-1 rounded-lg bg-white">
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
}
