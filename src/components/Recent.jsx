import React from "react";
import {RecentData} from "../data";

export default function Recent() {
  return (
    <div className="ml-52 pt-3 flex flex-col space-y-3">
      <h1 className="font-medium">Recent Scan</h1>
      <div className="border-2 rounded">
        <div className="w-full flex flex-row rounded justify-evenly items-center p-2 font-medium bg-green-200">
          <p>Store</p>
          <p>Agent</p>
          <p>Time</p>
          <p>Product</p>
          <p>Farmer</p>
        </div>
        {RecentData.map((recent) => 
          <div className="w-full flex flex-row justify-evenly items-center p-2 border-t-2" key={recent.id}>
          <p>{recent.agent}</p>
          <p>{recent.time}</p>
          <p>{recent.store}</p>
          <p>{recent.product}</p>
          <p>{recent.farmer}</p>
        </div>
        )}
      </div>
    </div>
  );
}
