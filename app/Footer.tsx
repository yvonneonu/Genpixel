import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className="flex flex-col w-full justify-between md:flex-row">
        <div className="mt-[60px] md:w-[500px]">
          <Image src={"/Menu.svg"} alt="logo" width={100} height={100} />
          <div className="mt-[18px]">
            <div className="w-80 text-black text-sm font-normal font-['Atyp Text']">
              Genpixel Digital Agency
              <br />
              Main Street, Bandra West
              <br />
              Mumbai- India
              <br />
              <br />
              <div className="md:hidden flex">
                Phone: +91 232 345 23 92
                <br />
                Email: support@genpixel.com
              </div>
            </div>
          </div>
          <div className="mt-[30px] md:mt-[128px] flex flex-row gap-4 pb-[30px] border-b md:border-none border-black">
            <Image
              src={"/instagram.svg"}
              alt="instagram"
              width={32}
              height={32}
            />
            <Image
              src={"/facebook.svg"}
              alt="facebook"
              width={32}
              height={32}
            />

            <Image
              src={"/TwitterX.svg"}
              alt="TwitterX"
              width={32}
              height={32}
            />

            <Image
              src={"/whatsapp.svg"}
              alt="whatsapp"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="mt-[30px] md:pl-[40px] md:border-l border-black md:w-[900px]">
          <div className="text-black text-xl font-normal font-['Atyp Text']">
            Pages
          </div>
          <div className="mt-[21px] md:flex md:gap-[50px] md:flex-row ">
            <div className="flex flex-col  gap-[18px]">
              <div className="text-black text-lg font-normal font-['Atyp Text']">
                Home
              </div>
              <div className="text-black text-lg font-normal font-['Atyp Text']">
                Our story
              </div>
              <div className="text-black text-lg font-normal font-['Atyp Text']">
                Featured works
              </div>
              <div className="text-black text-lg font-normal font-['Atyp Text']">
                Services
              </div>
              <div className="text-black text-lg font-normal font-['Atyp Text']">
                Contact us
              </div>
              <div className="text-black text-lg md:hidden font-normal font-['Atyp Text']">
                Blogs
              </div>
              <div className="text-black text-lg md:hidden font-normal font-['Atyp Text']">
                Newsletters
              </div>
            </div>
            <div className="flex flex-col  gap-[18px]">
              <div className="text-black text-lg hidden md:flex font-normal font-['Atyp Text']">
                Blogs
              </div>
              <div className="text-black text-lg hidden md:flex font-normal font-['Atyp Text']">
                Newsletters
              </div>
            </div>
          </div>
        </div>
        <div className="border-b md:hidden mt-[30px] border-black"></div>
        <div className="text-center  md:hidden text-black text-lg mt-[30px] font-normal font-['Atyp Text']">
          copyright: Genpixel@2023
        </div>
      </div>

      <div className="w-full hidden md:flex border-t mt-[30px] border-black">
        <div className="flex w-full gap-44 my-[40px] items-center flex-row">
          <div className="flex w-full  flex-row gap-16">
            <div className="text-black text-lg font-normal font-['Atyp Text']">
              Phone: +91 232 345 23 92
            </div>
            <div className="text-black text-lg font-normal font-['Atyp Text']">
              Email: support@genpixel.com
            </div>
          </div>
          <div className="text-black w-full text-center flex justify-end items-end text-lg font-normal font-['Atyp Text']">
            copyright: Genpixel@2023
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
