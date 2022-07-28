import React from "react";
import { BiSearch } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { MdMoreVert } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function StoreList() {
  return (
    <div className="w-full">
      {/* add store button and search */}
      <div className="bg-green-300 w-full h-[35%] flex items-center justify-center rounded-b-[40px] pb-40">
        <div className="w-[72%] flex flex-row space-x-7">
          <div className="bg-white rounded-lg p-2 flex justify-end shadow-md w-full items-center">
            <BiSearch className="w-8 h-8 opacity-50" />
          </div>
          <div className=" flex flex-row  border-2 rounded-lg bg-white justify-center items-center w-[20%] space-x-2 shadow-md">
            <GrAddCircle className="h-7 w-7 opacity-50" />
            <button className="font-normal">Add Store</button>
          </div>
        </div>
      </div>
      {/* end of add store button and search */}

      {/* store name */}
      <div className="w-[70%] flex items-center relative bottom-[200px]">
        <div className="w-full mx-60 relative">
          <div className="flex flex-row mt-5 w-full justify-evenly rounded-md font-medium space-x-4 bg-transparent">
            <div className="bg-slate-500 w-full h-10 text-center flex items-center justify-center rounded-lg text-white">
              <p>Chamka Mon</p>
            </div>
            <div className="bg-white w-full h-10 text-center flex items-center justify-center rounded-lg">
              <p>Daun Penh</p>
            </div>
            <div className="bg-white w-full h-10 text-center flex items-center justify-center rounded-lg">
              <p>Dangkao</p>
            </div>
            <div className="bg-white w-full h-10 text-center flex items-center justify-center rounded-lg">
              <p>Takmao</p>
            </div>
          </div>
        </div>
      </div>

      {/* end of store name */}

      <div className="flex flex-row space-x-10 bottom-[160px] relative">
        {/* card1 go here */}
        <div className="w-[15%] h-[30%] border-2 ml-[14%] rounded-md bg-green-100 opacity-90">
          <div className="w-full bg-white pb-3 flex flex-row rounded-t-md  border-b-2 items-center">
            <p className="font-normal items-center ml-[20%]">LengNavattra</p>
            <MdMoreVert className="ml-[35%]" />
          </div>
          <section className="bg-green-200 flex flex-col justify-center items-center">
            <img src="images/store.png" alt="" className="w-20 h-20 mt-5" />
            <div className="flex flex-row space-x-6 mt-4">
              <span>
                <p>Location</p>
                <p>Contact</p>
              </span>
              <span>
                <p>
                  Borey Piphop Tmey3,SangKat Prey Sa,Khan Dangkor, Phnom Penh
                </p>
                <p>086 98 111 9</p>
              </span>
            </div>
            <div className="ml-[85%] mt-5 mb-2">
              <RiDeleteBin6Line className="w-6 h-6" />
            </div>
          </section>
        </div>
        {/* end card1 go here */}

        {/* card2 go here */}
        <div className="w-[15%] h-[30%] border-2 ml-[14%] rounded-md bg-green-100 opacity-90">
          <div className="w-full bg-white pb-3 flex flex-row rounded-t-md items-center border-b-2">
            <p className="font-normal items-center ml-[45%]">Leng</p>
            <MdMoreVert className="ml-[35%]" />
          </div>
          <section className="bg-green-200 flex flex-col justify-center items-center">
            <img src="images/store.png" alt="" className="w-20 h-20 mt-5" />
            <div className="flex flex-row space-x-6 mt-4">
              <span className="font-medium flex flex-wrap">
                <p>Location</p>
                <p>Contact</p>
              </span>
              <span className="mr-28 flex flex-wrap">
                <p>
                  Borey Piphop Tmey3,SangKat Prey Sa,Khan Dangkor, Phnom Penh{" "}
                </p>
                <p>086 98 111 9</p>
              </span>
            </div>
            <div className="ml-[85%] mt-5 mb-2">
              <RiDeleteBin6Line className="w-6 h-6" />
            </div>
          </section>
        </div>
        {/* end of card2 go here */}

        {/* card3 go here */}
        <div className="w-[15%] h-[30%] border-2 ml-[14%] rounded-md bg-green-100 opacity-90">
          <div className="w-full bg-white pb-3 flex flex-row rounded-t-md items-center border-b-2">
            <p className="font-normal items-center ml-[45%]">Leng</p>
            <MdMoreVert className="ml-[35%]" />
          </div>
          <section className="bg-green-200 flex flex-col justify-center items-center">
            <img src="images/store.png" alt="" className="w-20 h-20 mt-5" />
            <div className="flex flex-row space-x-6 mt-4">
              <span className="font-medium flex flex-wrap">
                <p>Location</p>
                <p>Contact</p>
              </span>
              <span className="mr-28 flex flex-wrap">
                <p>
                  Borey Piphop Tmey3,SangKat Prey Sa,Khan Dangkor, Phnom Penh{" "}
                </p>
                <p>086 98 111 9</p>
              </span>
            </div>
            <div className="ml-[85%] mt-5 mb-2">
              <RiDeleteBin6Line className="w-6 h-6" />
            </div>
          </section>
        </div>
        {/* end of card3 */}
      </div>
    </div>
  );
}
