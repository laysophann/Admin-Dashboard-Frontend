import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Table() {
  return (
    <div className="flex flex-col justify-center items-center bg-green-300 w-10/12 h-96 rounded-b-lg ml-6">
      <div className="bg-white rounded-lg w-11/12 p-2 flex justify-end shadow-md">
        <BiSearch className="w-8 h-8 opacity-50" />
      </div>
      
      <div className="flex flex-row mt-5 w-11/12 justify-evenly bg-slate-200 rounded-md p-3 font-medium ">
        <p>Product</p>
        <p>Store</p>
        <p>Location</p>
        <p>Time</p>
      </div>
      <div className="flex flex-row mt-5 w-11/12 justify-evenly bg-white border-2 rounded-md p-3 font-medium ">
        <p>Product</p>
        <p>Store</p>
        <p>Location</p>
        <p>Time</p>
      </div>
      <div className="flex flex-row mt-5 w-11/12 justify-evenly bg-white border-2 rounded-md p-3 font-medium ">
        <p>Product</p>
        <p>Store</p>
        <p>Location</p>
        <p>Time</p>
      </div>
      <div className="flex flex-row mt-5 w-11/12 justify-evenly bg-white border-2 rounded-md p-3 font-medium ">
        <p>Product</p>
        <p>Store</p>
        <p>Location</p>
        <p>Time</p>
      </div>
      </div>
  );
}
