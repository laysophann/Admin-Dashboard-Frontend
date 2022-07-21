import React from "react";
import { SidebarData } from "../data";


export default function Sidebar() {
  return (
   <div className="mr-4 p-4 bg-green-100 h-screen w-60  flex flex-col">

   {/* logo */}
    <div className="flex flex-row p-5 justify-center items-center">
    <img src="images/logo.png" alt="" className="w-40" />
    <span className="text-gray-500 text-lg font-extrabold">OGP</span>
    </div>

    {/* icons and title*/}
    <div className="flex flex-col justify-start ml-3 space-y-10">
    {SidebarData.map((sidebar) => (
      <div>

        <section className="flex space-x-4 items-center hover:bg-slate-200 hover:rounded-md" key={sidebar.id}>
        <ul> 
        <li>
        <img src={sidebar.image} alt="gallery" className='w-12'/>
        </li>
        </ul>
        <span className="title-font text-lg text-gray-500">{sidebar.tittle}</span>
        </section>
      </div>
    ))}
    </div>  
   </div>
  );
}
