import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ExtendedCardVegetableData } from "../../data";

export default function ExtendedCardVegetable() {
  return (
    <div>
      <div className="flex flex-col rounded-lg w-[25%] absolute right-36 top-[38%]">
        {ExtendedCardVegetableData.map((vegetable) => (
          <div
            key={vegetable.id}
            className="flex justify-evenly items-center space-x-6 border border-slate-500 bg-slate-200"
          >
            <img src={vegetable.image} alt="" className="w-12 h-12 m-2" />
            <p className="w-12">{vegetable.title}</p>
            <FiEdit />
            <RiDeleteBin6Line />
          </div>
        ))}
      </div>
    </div>
  );
}
