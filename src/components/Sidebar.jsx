import { Link } from "react-router-dom";
import React, { useState } from "react";
import { SidebarData } from "../data";

export default function Sidebar() {
  const [hover1, Sethover1] = useState(true);
  const [active, setActive] = useState(1);

  return (
    <div className="p-4 bg-green-100 h-screen w-60  flex flex-col">
      {/* logo */}
      <div className="flex flex-row p-5 justify-center items-center">
        <img src="images/logo.png" alt="" className="w-40" />
        <span className="text-gray-500 text-lg font-extrabold">OGP</span>
      </div>

      {/* icons and title*/}
      <div className="flex flex-col justify-start ml-3 space-y-10">
        {SidebarData.map((sidebar) => (
          <Link key={sidebar.id} to={sidebar.path}>
            <section
              className={`${
                hover1
                  ? "hover:font-bold hover:rounded hover:cursor-pointer"
                  : " "
              } ${
                active === sidebar.id ? "font-bold" : ""
              } flex space-x-4 items-center`}
              onClick={() => {
                setActive(sidebar.id);
              }}
            >
              <ul>
                <li>
                  <img src={sidebar.image} alt="gallery" className="w-12" />
                </li>
              </ul>
              <span className="title-font text-lg text-gray-500">
                {sidebar.tittle}
              </span>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
}
