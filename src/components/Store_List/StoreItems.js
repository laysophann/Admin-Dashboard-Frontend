import { GrMoreVertical } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

const StoreItems = ({ id, storeName, img, location, contact }) => {
  const [clickedItem, setClickItem] = useState(false);

  function display() {
    setClickItem(true);
  }

  return (
    <div className="w-[15%] h-[30%] border-2 ml-[14%] rounded-md bg-green-100 opacity-90">
      <div className="w-full bg-white p-3 flex flex-row flex-1 rounded-t-md  border-b-2 justify-center items-center">
        <p className="font-normal text-center w-full">{storeName}</p>
        <div className="cursor-pointer">
          <GrMoreVertical onClick={display} />
        </div>
        {clickedItem ? (
          <span className="absolute bg-white rounded-b-lg rounded-tl-lg top-8 ml-40 p-4 font-semibold">
            Edit
          </span>
        ) : (
          ""
        )}
      </div>

      {/* store imag, location and contact  */}
      <section className="bg-green-200 flex flex-col justify-center items-center">
        <img src={img} alt="" className="w-20 h-20 mt-5" />
        <div className="flex flex-col space-y-3 mt-5 ml-5">
          <span className="flex flex-row space-x-3">
            <p className="font-semibold">Location:</p>
            <p>{location}</p>
          </span>
          <span className="flex flex-row space-x-3">
            <p className="font-semibold">Contact:</p>
            <p>{contact}</p>
          </span>
        </div>
        <div className="ml-[85%] mt-5 mb-2">
          <RiDeleteBin6Line className="w-6 h-6" />
        </div>
      </section>
      {/* end of store image, location and contact */}
    </div>
  );
};

export default StoreItems;
