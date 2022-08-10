import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { storeData } from "../../data";
import ExtendedCardStoreList from "./ExtendedCardStoreList";
import StoreItems from "./StoreItems";

export default function StoreList() {
  const [clickedItem, setClickItem] = useState(false);

  function display() {
    setClickItem(true);
  }
  return (
    <div className="w-full">
      {/* add store button and search */}
      <div className="bg-green-300 w-full h-[35%] flex items-center justify-center rounded-b-[40px] pb-40">
        <div className="w-[72%] flex flex-row space-x-7">
          <div className="bg-white rounded-lg p-2 flex justify-end shadow-md w-full items-center">
            <BiSearch className="w-8 h-8 opacity-50" />
          </div>
          <div className=" flex flex-row  border-2 rounded-lg bg-white justify-center items-center w-[20%] space-x-2 shadow-md">
            <GrAddCircle className="h-7 w-7 opacity-50" onClick={display} />
            <button className="font-normal">Add Store</button>
            {clickedItem ? <ExtendedCardStoreList /> : ""}
          </div>
        </div>
      </div>
      {/* end of add store button and search */}

      {/* store name */}
      <div className="w-[70%] flex items-center relative bottom-[200px]">
        <div className="w-full mx-60 relative">
          <div className="flex flex-row mt-5 w-full justify-evenly rounded-md font-medium space-x-4 bg-transparent">
            <div className="bg-slate-500 w-full h-10 text-center flex items-center justify-center rounded-lg text-white cursor-pointer">
              <p>All</p>
            </div>
            <div className="bg-white w-full h-10 text-center flex items-center justify-center rounded-lg cursor-pointer">
              <p>Chamka Mon</p>
            </div>
            <div className="bg-white w-full h-10 text-center flex items-center justify-center rounded-lg cursor-pointer">
              <p>Daun Penh</p>
            </div>
            <div className="bg-white w-full h-10 text-center flex items-center justify-center rounded-lg cursor-pointer">
              <p>Dang Kao</p>
            </div>
          </div>
        </div>
      </div>

      {/* end of store name */}

      <div className="flex flex-row space-x-28 bottom-[160px] relative">
        {storeData.map((store) => (
          <StoreItems
            key={store.id}
            id={store.id}
            storeName={store.storeName}
            img={store.image}
            location={store.location}
            contact={store.contact}
          />
        ))}
      </div>
    </div>
  );
}
