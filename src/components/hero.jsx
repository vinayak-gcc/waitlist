"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Navbar from "./ui/Navbar";
import WaitlistForm from "./ui/WaitlistForm";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black/95 text-white relative overflow-hidden ">
      {/* Hero Background */}
      <div className="absolute w-screen top-0 left-0 w-full h-full">
        <Image
          src="/HeroBG.png"
          alt="Hero Background"
          height={980}
          width={1420}
          className=" mt-[2rem] w-[90vw] opacity-90   sm:w-[120vw] md:w-[90vw] lg:h-[80vw] h-screen 
            md:-mt-4 lg:-mt-[12rem] ml-12 backdrop-blur-0 scale-105 w-screen "
        />
      </div>

      {/* Navigation */}
      <Navbar />
     

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-6 pb-12 relative z-10 scale-95">
        <div className="max-w-6xl mx-auto relative">

        {/* Wailist Button */}
        {/* For back-drop Effect  */}
        <div className="mx-auto flex items-center justify-center -mt-[2.5rem] scale-[0.85] ">
        <div
        className="absolute px-4 w-[100px] h-[40px] backdrop-blur-[30px] rounded-[40px] bg-white/10 border border-white/50 shadow-[inset_0px_0px_30px_rgba(255,255,255,0.2),0px_10px_20px_rgba(0,0,0,0.4)] overflow-visible box-border z-[-1]"
        style={{
          boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px inset, rgba(0, 0, 0, 0.4) 0px 10px 20px",
        }}
      ></div>
      {/* Actual Waitlist Button */}
      <div
        className=" px-5 text-white font-medium  w-[100px] h-[40px] rounded-[40px] p-2 bg-black/60 md:bg-black/50 border border-white/50 shadow-[inset_0px_0px_30px_rgba(255,255,255,0.2),0px_10px_20px_rgba(0,0,0,0.4)] overflow-visible box-border z-10"
        style={{
          boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px inset, rgba(0, 0, 0, 0.4) 0px 10px 20px",
        }}
      >
         Waitlist
      </div>
      </div>
   
          <h1 className="text-6xl mx-auto flex flex-col sm:flex-row items-center justify-center  tracking-[-0.06em] mt-[2rem]  text-white/90 md:text-7xl font-semibold text-center ">
            <div>Coming </div>
            <div><span className="text-white/80 sm:ml-2"> soon!</span></div>
          </h1>
          {/* Waitlist Form */}
          <WaitlistForm />

          {/* Social Links */}
          <div className=" mt-[12rem] sm:mt-[10rem] lg:mt-[9.5rem] flex items-center justify-center text-center mx-auto px-0  space-x-2 scale-90 mt-4">
            <a
              href="#"
              className="p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
            >
                 <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
            </a>
            <a
              href="#"
              className="p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
