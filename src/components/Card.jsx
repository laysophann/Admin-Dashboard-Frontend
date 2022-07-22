import React from "react";
import { BiCaretDown, BiSearch } from "react-icons/bi";
import Recent from "./Recent";
import Trending from "./Trending";

export default function Card() {
  return (
    <div className="">
      <div className="flex flex-row">
        <div className="bg-green-100 rounded-lg flex flex-row h-44 mt-10 ml-52">
          <div className="flex flex-col ml-5">
            <div className="flex flex-row pt-10 pl-3 space-x-2">
              <h1 className="text-black font-bold text-lg">Daily Scan</h1>
              <BiCaretDown />
            </div>
            <input
              type="date"
              className="pt-2 text-gray-500 bg-green-100 pl-3 pr-28"
            />
            <div className="rounded-full bg-green-300 ml-40 w-16 h-16 mb-4 p-4 pl-2">
              <p className="text-black text-lg text-center">168</p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 rounded-lg flex flex-row h-44 mt-10 ml-52">
          <div className="flex flex-col ml-5">
            <div className="flex flex-row pt-10 pl-3 space-x-2">
              <h1 className="text-black font-bold text-lg">Daily Scan</h1>
              <BiCaretDown />
            </div>
            <input
              type="date"
              className="pt-2 text-gray-500 bg-green-100 pl-3 pr-28"
            />
            <div className="rounded-full bg-green-300 ml-40 w-16 h-16 mb-4 p-4 pl-2">
              <p className="text-black text-lg text-center">168</p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 rounded-lg flex flex-row h-44 mt-10 ml-52">
          <div className="flex flex-col ml-5">
            <div className="flex flex-row pt-10 pl-3 space-x-2">
              <h1 className="text-black font-bold text-lg">Daily Scan</h1>
              <BiCaretDown />
            </div>
            <input
              type="date"
              className="pt-2 text-gray-500 bg-green-100 pl-3 pr-28"
            />
            <div className="rounded-full bg-green-300 ml-40 w-16 h-16 mb-4 p-4 pl-2">
              <p className="text-black text-lg text-center">168</p>
            </div>
          </div>
        </div>
      </div>
      {/* search box */}
      <div className="w-10/11 h-10 bg-slate-200 mt-6 ml-52 rounded-full flex flex-row justify-end items-center pr-4 shadow-slate-200 shadow-sm">
      <BiSearch className="w-10 h-10 opacity-50"/>
      </div>
      <Trending></Trending>
      <Recent></Recent>
    </div>
  );
}
