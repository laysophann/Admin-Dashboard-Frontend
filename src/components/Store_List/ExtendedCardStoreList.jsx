import React from "react";
import { IoMdPhotos } from "react-icons/io";
export default function ExtendedCardStoreList() {
  return (
    <div className="flex flex-col absolute p-8 rounded-lg top-40 bg-slate-100 snap-y">
      <div className="space-y-5">
        <div className="font-semibold text-lg flex items-center justify-center">
          Add Store
        </div>

        <div>Store Info</div>
        <div className="bg-slate-300 rounded-md p-20 space-y-2">
          <IoMdPhotos className="w-full h-full" />
          <div className="">Add Photo</div>
        </div>

        <div className="p-3 bg-slate-300 rounded font-semibold">Name</div>

        <div className="bg-slate-300 p-3 rounded w-full h-44 font-semibold">
          Description
        </div>
        <div className="p-3 bg-slate-300 rounded font-semibold">Location</div>
        <div className="p-3 bg-slate-300 rounded font-semibold">Contact</div>
        <div className="flex justify-center">
          <button className="flex justify-center items-center bg-green-500 p-3 rounded-lg font-bold opacity-80 border-slate-600 border w-[50%]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
