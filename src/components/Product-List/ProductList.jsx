import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { GrMoreVertical } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { listData } from "../../data";
import ExtendedCardProductList from "./ExtendedCardProductList";
import ExtendedCard from "./ExtendedCardProductList";

export default function ProductList() {
  const [selectedFilter, setSelectedFilter] = useState("all"); // possible value: all | meat | fruit | vegetable

  const onClickSelectFilter = (categ) => {
    setSelectedFilter(categ);
  };

  const selectedFilterBg = (filter) =>
    selectedFilter === filter ? "bg-slate-500 text-white" : "bg-white";

  const [clickedItem, setClickItem] = useState(false);
  const display = () => {
    setClickItem(true);
  };

  return (
    <div className="w-full">
      <div className="bg-green-300 w-full h-[35%] flex items-center justify-center rounded-b-[40px] pb-40">
        {/* search space and add product button */}
        <div className="w-[72%] flex flex-row space-x-7">
          <div className="bg-white rounded-lg p-2 flex justify-end shadow-md w-full items-center">
            <BiSearch className="w-8 h-8 opacity-50" />
          </div>
          <div className=" flex flex-row  border-2 rounded-lg bg-white justify-center items-center w-[20%] space-x-2 shadow-md">
            <GrAddCircle className="h-7 w-7 opacity-50" onClick={ display } />
            <button className="font-normal">Add Product</button>
            {clickedItem ? <ExtendedCardProductList /> : ''}
          </div>
        </div>
      </div>
      {/* end of search space and add product button */}

      {/* filter type of product*/}
      <div className="w-[70%] flex items-center relative bottom-[170px]">
        <div className="w-full mx-60 relative">
          <div className="flex flex-row mt-5 w-full justify-evenly rounded-md font-medium space-x-4 bg-transparent">
            <div
              onClick={() => onClickSelectFilter("all")}
              className={`${selectedFilterBg(
                "all"
              )} cursor-pointer w-full h-10 text-center flex items-center justify-center rounded-lg`}
            >
              <p>All</p>
            </div>
            <div
              onClick={() => onClickSelectFilter("vegetable")}
              className={`${selectedFilterBg(
                "vegetable"
              )} cursor-pointer w-full h-10 text-center flex items-center justify-center rounded-lg`}
            >
              <p>Vegetable</p>
            </div>
            <div
              onClick={() => onClickSelectFilter("fruit")}
              className={`${selectedFilterBg(
                "fruit"
              )} w-full h-10 text-center cursor-pointer flex items-center justify-center rounded-lg`}
            >
              <p>Fruit</p>
            </div>
            <div
              onClick={() => onClickSelectFilter("meat")}
              className={`${selectedFilterBg(
                "meat"
              )} w-full h-10 text-center flex items-center cursor-pointer justify-center rounded-lg`}
            >
              <p>Meat</p>
            </div>
          </div>
        </div>
      </div>
      {/* end of filter type of product */}

      {/* card go here*/}
      <div className="flex flex-row space-x-28 flex-wrap bottom-[115px] relative">
        {listData.map((list) => {
          if (list.categ === selectedFilter || selectedFilter === "all") {
            return (
              <div
                className="w-[15%] h-[30%] border-2 ml-[14%] rounded-md bg-green-200 opacity-90"
                key={list.id}
              >
                <div className="w-full bg-white p-3 flex flex-row flex-1 rounded-t-md items-center border-b-2 justify-center">
                  <p className="font-normal items-center text-center w-full">
                    {list.name}
                  </p>
                  <div className="cursor-pointer">
                    <GrMoreVertical onClick={display} />
                    {clickedItem ? (
                      <span className="absolute bg-white rounded-b-lg rounded-tl-lg top-10 p-4 font-semibold flex flex-col justify-center items-start">
                        <p>Edit</p>
                        <p>See Benefit</p>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
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
            );
          } else <></>;
        })}
      </div>
      {/* end of card */}

      {/* card of col2 */}

      {/* <div className="flex flex-row space-x-28 flex-wrap bottom-[90px] relative">
        {listData.map((list) => (
          <div
            className="w-[15%] h-[30%] border-2 ml-[14%] rounded-md bg-green-200 opacity-90"
            key={list.id}
          >
            <div className="w-full bg-white p-3 flex flex-row flex-1 rounded-t-md items-center border-b-2 justify-center">
              <p className="font-normal items-center w-5/6 text-center">
                {list.name}
              </p>
              <GrMoreVertical className="w-1/6" />
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
      </div> */}
      {/* end of card col2 */}
    </div>
  );
}
