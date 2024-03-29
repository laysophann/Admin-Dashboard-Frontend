import React from "react";
import { trendingData } from "../data";
export default function Trending() {
  return (
    <div className="ml-52 pt-6 flex flex-row space-x-40 ">
      <img src="images/map.jpg" alt="" className="w-2/5 h-96" />
      <div className="w-96 border rounded-md ">
        <div className="bg-green-200 py-5 text-center">
          <p className="font-bold text-lg">Trending Products</p>
        </div>
        <div className="flex justify-between px-5 py-2 font-medium">
          <p>Product Name</p>
          <p>Rank</p>
        </div>

        {trendingData.map((trending) => 
          <div className="px-3 flex justify-between border mx-2 py-2 rounded-md mb-3" key={trending.id}>
          <p>{trending.type}</p>
          <p>{trending.rank}</p>
        </div>
        )}
      </div>
    </div>
  );
}
