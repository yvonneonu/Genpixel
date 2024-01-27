import { ArrowRight, ArrowRight2, ArrowRight3 } from "iconsax-react";
import Image from "next/image";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="px-[30px] py-[30px] md:px-[60px] md:py-[40px]">
      <div className="gap-[18px] mt-[70px] md:mt-[90px] md:gap-[20px] flex flex-col">
        <h1 className=" text-black text-4xl md:text-8xl font-normal font-['Atyp Display'] ">
          We are a creative studio <br />
          that inspires.
        </h1>

        <div className="text-black text-sm md:w-[670px] md:text-2xl  font-normal font-['Atyp Text']">
          Designers from across the world challenging the very idea of design
          one project at a time.
        </div>

        <div className="flex md:hidden flex-row gap-[12px]">
          <div className="text-zinc-500 text-sm font-normal font-['Atyp Display']">
            Watch our reel
          </div>
          <div className="w-[18px] flex justify-center items-center h-[18px] bg-black">
            <ArrowRight2 size="20" color="#FFFFFF" variant="Bold" />
          </div>
        </div>

        <div className="mt-[12px] md:mt-0">
          <Image
            src="/Creative.svg"
            alt="Creative"
            width={670}
            height={400}
            className="w-full h-[320px] object-cover md:h-[794px]"
          />
        </div>

        <div className="mt-[12px] md:mt-[20px] border-b border-black"></div>
      </div>
      {/* Our Specialties Section */}
      <div className="gap-[30px] mt-[30px] md:mt-[40px] md:gap-0 flex flex-col">
        <div className="text-zinc-500 text-base md:text-lg font-normal font-['Atyp Display']">
          Our Specialties
        </div>

        <div className="flex lg:gap-[100px] lg:items-center md:justify-between flex-col lg:flex-row">
          <div className="lg:max-w-[700px] w-full">
            <div className="gap-[18px] md:gap-[20px] flex flex-col lg:mt-[40px]">
              <div className=" text-black text-3xl lg:text-7xl font-normal font-['Atyp Display']">
                We are a creative studio <br />
                that inspires.
              </div>
              <div className=" text-black lg:text-2xl text-sm font-normal font-['Atyp Text']">
                Through careful analysis, creative thinking, and a deep
                understanding of their goals, we empower businesses to surpass
                expectations and thrive in today&apos;s dynamic and competitive
                landscape.
              </div>
            </div>

            <Image
              src="/Studio.svg"
              alt="Studio"
              width={670}
              height={400}
              className="w-full mt-[40px] h-[356px] object-cover flex lg:hidden"
            />
            <div className="lg:mt-[150px] mt-[40px]">
              <div className="flex justify-between items-center flex-row lg:gap-[174px]">
                <div className="text-black lg:text-[64px] text-4xl font-normal font-['Atyp Text']">
                  BRANDING
                </div>

                <ArrowRight size="32" color="#000000" />
              </div>
            </div>

            <button className="bg-black rounded h-[26px] lg:mt-[150px] mt-[40px] w-[116px] lg:w-[130px] px-2.5 items-center text-white text-xs lg:text-sm font-normal font-['Sequel Sans']">
              OUR SERVICES
            </button>
          </div>

          <Image
            src="/Studio.svg"
            alt="Studio"
            width={670}
            height={734}
            className="w-full hidden h-full lg:flex object-cover "
          />
        </div>

        <div className="md:mt-[40px] border-b border-black"></div>
      </div>
      {/* Client Section */}
      <div className="gap-[30px] mt-[30px] md:mt-[40px] md:gap-[40px] flex flex-col">
        <div className="text-zinc-500 text-base md:text-lg font-normal font-['Atyp Display']">
          Clients We Served
        </div>

        <div className="flex items-center gap-[41px] md:gap-[167px] w-full overflow-scroll">
          <Image
            src="/Walmart_Index_Only.svg.svg"
            alt="Clients"
            width={117}
            height={64}
          />
          <Image src="/Group1.svg" alt="Cisco" width={71} height={40} />

          <Image
            src="/Volvo_Index_Only.svg.svg"
            alt="Volvo_Index_Only"
            width={53}
            height={64}
          />
          <Image src="/Group13.svg" alt="Group13" width={89} height={17} />
          <Image src="/okta.svg.svg" alt="okta" width={73} height={64} />
          <Image src="/okta.svg.svg" alt="okta" width={73} height={64} />
        </div>

        <div className=" border-b border-black"></div>
      </div>

      {/* Our Specialties Section */}
      <div className="gap-[30px] mt-[30px] md:mt-[40px] md:gap-[40px] flex flex-col">
        <div className="text-zinc-500 text-base md:hidden flex font-normal font-['Atyp Display']">
          Our Specialties
        </div>
        <div className="text-zinc-500 text-lg hidden md:flex font-normal font-['Atyp Display']">
          Our Team
        </div>

        <div className="text-wrap text-black text-3xl md:text-7xl font-normal font-['Atyp Display'] leading-9">
          Our relentless pursuit of a shared vision fuels our creativity.
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="flex gap-[25px] md:gap-[80px] w-full md:flex-row flex-col">
            <div className="w-full justify-center items-center text-center gap-5 flex flex-col px-[30px] md:px-0">
              <Image
                src={"/img1.svg"}
                width={270}
                height={270}
                alt="img1"
                className="object-cover"
              />
              <div className="text-black text-2xl font-normal font-['Atyp Text']">
                Jone Doe, CEO
              </div>
            </div>

            <div className="w-full justify-center items-center text-center gap-5 flex flex-col  px-[30px] md:px-0">
              <Image
                src={"/img2.svg"}
                width={270}
                height={270}
                alt="img2"
                className="object-cover"
              />
              <div className="text-black text-2xl font-normal font-['Atyp Text']">
                Jone Doe, CEO
              </div>
            </div>

            <div className="w-full justify-center items-center text-center gap-5 flex flex-col px-[30px] md:px-0">
              <Image
                src={"/img3.svg"}
                width={270}
                height={270}
                alt="img3"
                className="object-cover"
              />
              <div className="text-black text-2xl font-normal font-['Atyp Text']">
                Jone Doe, CEO
              </div>
            </div>
            <div className="w-full hidden justify-center items-center text-center gap-5 md:flex flex-col px-[30px] md:px-0">
              <Image
                src={"/img4.svg"}
                width={270}
                height={270}
                alt="img3"
                className="object-cover"
              />
              <div className="text-black text-2xl font-normal font-['Atyp Text']">
                Jone Doe, CEO
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-black"></div>
      </div>
      {/* Specialties Project Section */}
      <div className="gap-[30px] mt-[30px] md:mt-[40px] md:gap-[40px] flex flex-col">
        <div className="md:flex flex-row gap-[46px] justify-center">
          <div className="gap-[30px] md:gap-[40px] flex flex-col">
            <div className="text-zinc-500 md:hidden flex text-base font-normal font-['Atyp Display']">
              Our Specialties
            </div>

            <div className="text-zinc-500 text-lg md:flex hidden font-normal font-['Atyp Display']">
              Our Featured Work
            </div>

            <div className="md:text-7xl text-black text-3xl font-normal font-['Atyp Display'] leading-9">
              Showcasing our projects.
            </div>

            <button className="w-[138px] md:w-[155px] h-6 px-3 text-white text-xs md:text-sm font-normal font-['Sequel Sans'] bg-black rounded justify-center items-center gap-2.5 inline-flex">
              COMPLETE WORKS
            </button>
          </div>

          <div className="w-[872px] border-l border-black md:flex hidden">
            <div className="ml-[45px]">
              <div className="flex flex-col gap-[22px]">
                <Image
                  src={"/projectweb.svg"}
                  width={785}
                  height={470}
                  alt="project"
                  className="object-cover w-full"
                />
                <div className=" text-black text-lg font-normal font-['Atyp Text']">
                  DANCING STARS
                </div>
              </div>
              <div className="border-b my-[38px] border-black"></div>

              <div className="flex flex-row gap-[36px]">
                <div className="flex flex-col gap-[22px]">
                  <Image
                    src={"/laptop.svg"}
                    width={355}
                    height={240}
                    alt="project"
                    className="object-cover w-full"
                  />
                  <div className=" text-black text-lg font-normal font-['Atyp Text']">
                    DANCING STARS
                  </div>
                </div>
                <div className="border border-black"></div>

                <div className="flex flex-col gap-[22px]">
                  <Image
                    src={"/office.svg"}
                    width={355}
                    height={240}
                    alt="project"
                    className="object-cover w-full"
                  />
                  <div className=" text-black text-lg font-normal font-['Atyp Text']">
                    DANCING STARS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden flex flex-col">
          <Image
            src={"/project.svg"}
            width={333}
            height={333}
            alt="project"
            className="object-cover w-full"
          />
          <div className="mt-[14px] text-black text-lg font-normal font-['Atyp Text']">
            DANCING STARS
          </div>
        </div>

        <div className="border-b border-black"></div>
      </div>

      {/* Case Study */}
      <div className="gap-[30px] mt-[30px] md:mt-[40px]  md:gap-[40px] flex flex-col">
        <div className="flex md:gap-[48px] flex-col md:items-center md:justify-between md:flex-row">
          <div className=" ">
            <div className="text-zinc-500 text-base md:text-lg font-normal font-['Atyp Display']">
              Case Studies
            </div>
            <Image
              src="/Study.svg"
              alt="casestudy"
              width={200}
              height={200}
              className="mt-[30px]"
            />
            <div className="text-black text-4xl font-normal font-['Atyp Text'] md:text-4xl mt-[18px]">
              CHALLENGE
            </div>
            <div className="mt-[12px] md:w-[560px] text-black text-sm font-normal md:text-2xl font-['Atyp Text']">
              Our client needed a brand refresh to better reflect their evolving
              business values and appeal to a younger demographic.
            </div>
          </div>

          <div className="md:border-l  md:pl-[48px]  md:flex md:border-black">
            <Image
              src="/officelap.svg"
              alt="office"
              width={333}
              height={284}
              className="mt-[30px] w-[333px]  h-[284px] md:w-[670px] md:h-[572px]"
            />
          </div>
        </div>
        <div className="border-b border-black"></div>
      </div>

      {/* We Can Connect */}
      <div className="gap-[30px] items mt-[30px] md:mt-[40px]  md:gap-[40px] flex flex-col">
        <div className="text-zinc-500 md:text-lg text-base font-normal font-['Atyp Display']">
          We Can Connect
        </div>
        <div className="md:hidden flex flex-col">
          <div className=" text-black text-3xl font-normal font-['Atyp Display'] leading-9">
            Let`s bring your brand to the next level.
          </div>
          <div className="mt-[18px] text-black text-sm font-normal font-['Atyp Text']">
            Together, let&#39;s elevate your brand to new heights by unleashing
            its full potential and captivating your target audience.
          </div>
          <div className="mt-[30px] text-black text-4xl font-normal font-['Atyp Text']">
            SUBSCRIBE TO OUR NEWSLETTER
          </div>
          <div className="mt-[30px] flex flex-col gap-10">
            <div>
              <div className="text-neutral-600 text-lg font-normal font-['Atyp Text']">
                Name
              </div>
              <div className="border-b mt-[10px] border-black"></div>
            </div>
            <div>
              <div className="text-neutral-600 text-lg font-normal font-['Atyp Text']">
                Email
              </div>
              <div className="border-b mt-[10px] border-black"></div>
            </div>
            <div>
              <div className="text-neutral-600 text-lg font-normal font-['Atyp Text']">
                Message
              </div>
              <div className="border-b mt-[10px] border-black"></div>
            </div>
          </div>
          <div className=" w-full flex  justify-end">
            <div className="w-20 mt-8 h-6 px-4  bg-black rounded-md justify-center text-white text-sm font-normal font-['Sequel Sans'] items-center gap-2.5 inline-flex">
              SUBMIT
            </div>
          </div>

          <Image
            src={"/no-emiall.svg"}
            className="mt-[40px]"
            width={400}
            height={400}
            alt="email"
          />
        </div>

        <div className="hidden md:flex justify-between flex-row gap-[58px]">
          <div className="w-[650px]">
            <div className=" text-black text-7xl font-normal font-['Atyp Display'] ">
              Let`s bring your brand to the next level.
            </div>

            <Image
              src={"/no-emiall.svg"}
              className="mt-[95px]"
              width={400}
              height={400}
              alt="email"
            />
          </div>
          <div className="md:border-l md:pl-[54px] w-[903px] md:flex flex-col md:border-black">
            <div className=" text-black text-3xl font-normal font-['Atyp Text']">
              Together, let&#39;s elevate your brand to new heights by
              unleashing its full potential and captivating your target
              audience.
            </div>
            <div className="mt-[80px]">
              <div className="w-96 text-black text-5xl font-normal font-['Atyp Text']">
                SUBSCRIBE TO OUR NEWSLETTER
              </div>

              <div className=" flex flex-col">
                <div className="mt-[41px] flex flex-col gap-10">
                  <div>
                    <div className="text-neutral-600 text-lg font-normal font-['Atyp Text']">
                      Name
                    </div>
                    <div className="border-b mt-[10px] border-black"></div>
                  </div>
                  <div>
                    <div className="text-neutral-600 text-lg font-normal font-['Atyp Text']">
                      Email
                    </div>
                    <div className="border-b mt-[10px] border-black"></div>
                  </div>
                  <div>
                    <div className="text-neutral-600 text-lg font-normal font-['Atyp Text']">
                      Message
                    </div>
                    <div className="border-b mt-[10px] border-black"></div>
                  </div>
                </div>
                <div className=" w-full flex mt-[40px] justify-end">
                  <div className="w-20 mt-8 h-6 px-4  bg-black rounded-md justify-center text-white text-sm font-normal font-['Sequel Sans'] items-center gap-2.5 inline-flex">
                    SUBMIT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-black"></div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
