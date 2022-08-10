import React from "react";

export default function UserLocation() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <img
        className="h-full w-full object-cover object-center"
        src="images/map.jpg"
        alt=""
      />

      {/* shop location div */}
      <div className="absolute top-52 left-56 p-4 rounded-xl bg-green-100 border-2 border-gray-400 font-medium">
        Shop Location
      </div>
    </div>
  );
}
