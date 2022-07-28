import React from "react";
import {RecentData} from "../data";

export default function Recent() {
  return (
    <div className="ml-52 pt-3 flex flex-col space-y-3">
      <h1 className="font-medium">Recent Scan</h1>
      <div className="border rounded-t-lg">
        <div className="w-full flex flex-row justify-center items-center p-2 font-medium bg-green-200">
          <p className="w-full flex flex-row justify-center items-center p-2 font-medium bg-green-200">Store</p>
          <p className="w-full flex flex-row justify-center items-center p-2 font-medium bg-green-200">Agent</p>
          <p className="w-full flex flex-row justify-center items-center p-2 font-medium bg-green-200">Time</p>
          <p className="w-full flex flex-row justify-center items-center p-2 font-medium bg-green-200">Product</p>
          <p className="w-full flex flex-row justify-center items-center p-2 font-medium bg-green-200">Farmer</p>
        </div>
        {RecentData.map((recent) => 
          <div className="w-full flex flex-row justify-center items-center p-1 border-y" key={recent.id}>
          <p className="w-full flex flex-row justify-center items-center p-1">{recent.agent}</p>
          <p className="w-full flex flex-row justify-center items-center p-1">{recent.time}</p>
          <p className="w-full flex flex-row justify-center items-center p-1">{recent.store}</p>
          <p className="w-full flex flex-row justify-center items-center p-1">{recent.product}</p>
          <p className="w-full flex flex-row justify-center items-center p-1">{recent.farmer}</p>
        </div>
        )}
      </div>
    </div>
  );
}
