import React from "react";

export default function Recent() {
  return (
    <div className="ml-52 pt-3 flex flex-col space-y-3">
      <h1 className="font-medium">Recent Scan</h1>
      <div className="border-2 rounded">
        <div className="w-full flex flex-row rounded justify-evenly p-2 font-medium bg-green-200">
          <p>Agent</p>
          <p>Time</p>
          <p>Store</p>
          <p>Product</p>
          <p>Farmer</p>
        </div>
        <div className="w-full flex flex-row  justify-evenly p-2 border-t-2">
          <p>Agent</p>
          <p>Time</p>
          <p>Store</p>
          <p>Product</p>
          <p>Farmer</p>
        </div>
        <div className="w-full flex flex-row  justify-evenly p-2 border-t-2">
          <p>Agent</p>
          <p>Time</p>
          <p>Store</p>
          <p>Product</p>
          <p>Farmer</p>
        </div>
        <div className="w-full flex flex-row  justify-evenly p-2 border-t-2">
          <p>Agent</p>
          <p>Time</p>
          <p>Store</p>
          <p>Product</p>
          <p>Farmer</p>
        </div>
      </div>
    </div>
  );
}
