"use client";

import Image from "next/image";
import React from "react";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="px-[30px] md:px-[60px] z-10 fixed left-0 right-0">
      <div className="h-[68px] md:h-[86px] bg-white  py-5 md:py-[30px] border-b border-black">
        <div className=" flex flex-row w-full justify-between gap-[102px] ">
          <Image src={"/Menu.svg"} alt="logo" width={100} height={100} />
          <Image
            src={"/Icon.svg"}
            alt="icon"
            width={28}
            height={28}
            onClick={handleClick}
            className="flex md:hidden"
          />
          <div className="hidden md:flex gap-[24px] flex-row">
            <h1 className="text-black text-base font-['Sequel Sans']">
              Our story
            </h1>
            <h1 className="text-black text-base font-['Sequel Sans']">
              Our works
            </h1>
            <h1 className="text-black text-base font-['Sequel Sans']">
              Services
            </h1>

            <button className="bg-black rounded h-[26px] w-[120px] px-2.5 py-1.5 items-center text-white text-xs font-normal font-['Sequel Sans']">
              LET`S CONNECT
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="bg-white z-[2] md:hidden  h-[100vh] ">
          <div className="flex flex-col gap-[30px] ml-[20px]">
            <h1 className="mt-[30px] text-black text-base font-['Sequel Sans']">
              Our story
            </h1>
            <h1 className="text-black text-base font-['Sequel Sans']">
              Our works
            </h1>
            <h1 className="text-black text-base font-['Sequel Sans']">
              Services
            </h1>

            <button className="bg-black rounded h-[26px] w-[120px] px-2.5 py-1.5 items-center text-white text-xs font-normal font-['Sequel Sans']">
              LET`S CONNECT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
