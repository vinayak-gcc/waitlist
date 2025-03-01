import React from 'react';
import Image from "next/image";
import { Search } from "lucide-react";

const Integrations = () => {
  return (
    <div className="flex  justify-center items-center  w-screen px-8 bg-black text-white p-4">
      <div className="w-full max-w-7xl z-10 space-y-16">

           {/* <div className="absolute w-screen flex flex-col w-screen h-[14rem] xl:h-[16rem]  z-0 w-full flex justify-center z-0">
                  <Image
                    src="/IntegrationBlur.png"
                    alt="Integration Background"
                    height={2000}
                    width={2000}
                    className="opacity-[100] scale-[0.9] mt-[14rem] max-w-[960px] max-h-[600px] mx-auto px-0 rotate-180 "
                  />
                          <Image
                    src="/IntegrationBlur.png"
                    alt="Integration Background"
                    height={2000}
                    width={2000}
                    className="opacity-[0.9] scale-75 mt-[14rem] rotate-180 "
                  />
                </div> */}

        {/* Header */}
        <div className="text-center space-y-4 ">
          <h1 className="text-3xl md:text-3xl font-medium text-white/90 mb-8">
            Integrati<span className="text-white/60">ons</span>
          </h1>
          <p className="text-sm md:text-base  lg:max-w-xl mx-auto ">
            Streamline operations, enhance functionality & provide a <br className="hidden md:block" />
            unified experience across your digital ecosystem.
          </p>
        </div>

            {/* Integration Card */}
            <div className="shadow-[0_0_20px_rgba(255,255,255,0.45)] mt-2  py-6 lg:scale-110 rounded-3xl w-full max-w-xl mx-auto relative">
          {/* Icons with Circles */}
          <div className="relative my-6 scale-100 mx-auto flex justify-center px-4">
            {/* Circles */}
            {/* <div className="absolute inset-0 flex borderitems-center justify-center">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="absolute rounded-full bg-black"
                  style={{
                    width: `${50 + index * 30}px`,
                    height: `${50 + index * 30}px`,
                    opacity: `${0.2 + index * 0.15}`,
                    zIndex: -index,
                  }}
                />
              ))}
            </div> */}

            <Image src="/5Logos.png" alt="Logos" height={1000} width={500} className="w-full max-w-sm relative" />
          </div>

          {/* Search Section */}
          <div className="space-y-6 my-4 px-8">
            <h2 className="text-2xl mt-10 md:text-3xl font-semibold text-center">
              Connect your <span className="text-white/50">tools</span>
            </h2>
            
            <div className="relative rounded-xl mx-auto w-full border-2 md:border max-w-md shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-100">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search integration..."
                className="w-full bg-black rounded-xl border-none pl-10  h-12 text-gray-600 placeholder-white/40"
              />
            </div>
          </div>

          {/* Line */}
          <div className="h-px bg-white mt-6"></div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end  mr-9 sm:px-12 sm:justify-end gap-4 my-6 sm:mr-4">
            <button className="text-white border border-white/40 px-6 rounded-full hover:bg-gray-900 py-2">
              Cancel
            </button>
            <button className="text-white border border-white/40 px-4 rounded-full hover:bg-gray-900 py-2 flex items-center">
              <span className="mr-2">+</span> Add tool
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Integrations;
