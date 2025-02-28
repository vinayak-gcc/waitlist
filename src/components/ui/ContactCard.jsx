import React from 'react'
import {
    Mail,
    Phone,
    MapPin,
    Twitter,
    Facebook,
    Instagram,
  } from "lucide-react";
  import Image from "next/image";
const ContactCard = () => {
  return (
    <div>
        <div className="mt-auto scale-90 bg-black flex flex-col items-center justify-center px-4 pt-8 relative overflow-hidden w-full">
        {/* Contact Card */}
        <div className="w-full  shadow-[0_0_20px_rgba(255,255,255,0.3)] overflow-hidden
 scale-95 max-w-2xl mb-10 border border-white/50 mx-auto z-10 rounded-[50px] relative">
          {/* Logo */}
          <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mx-auto mt-16 mb-8 shadow-[0px_0px_34px_rgba(255,255,255,0.5)]">
            <span className="text-4xl font-bold text-white">W</span>
          </div>

          {/* Welcome Text */}
          <p className="text-white text-center text-md mb-8 max-w-xl mx-auto">
            We'd love to hear from you if you have questions,
            <br />
            need support, or want to learn more.
          </p>

          {/* Social Icons */}
          <div className=" flex items-center justify-center text-center mx-auto px-0 scale-90 space-x-2 mb-12">
            <a
              href="#"
              className="p-4 rounded-xl bg-white/5 border border-white/20 text-white/90 hover:bg-zinc-800 transition-colors"
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
              className="p-4 rounded-xl  bg-white/5 border border-white/20 text-white hover:bg-zinc-800 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-4 rounded-xl bg-white/5 border border-white/20 text-white hover:bg-zinc-800 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          {/* Contact Info Grid */}
          <div className="relative mb-2 px-2 rounded-lg">
            {/* Background Gradient */}

            {/* Grid Container */}
            <div className="relative  grid grid-cols-1 md:grid-cols-3  justify-center gap-4 px-4 rounded-lg z-10 mb-6">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email us",
                  info: "hi@affanlab.com",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call us",
                  info: "(501) 123-4567",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Location",
                  info: "Crosby Street, NY, USA",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50  rounded-3xl px-4 py-4 flex flex-col items-center text-center border border-white/10 hover:bg-white/5 transition-colors relative"
                >
                  <div className="w-12 h-12 border border-white/10 text-white/70 bg-white/10 scale-[0.8] mt-2 mb-4 rounded-2xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-white/90 font-medium mb-1">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.info}</p>
                </div>
              ))}
            </div>
          </div>

              {/* Triangular Shapes to Hide bottom corners  */}
          {/* Decorative Corner Elements */}
          {/* <div className="absolute bottom-6 md:bottom-0 -left-10 w-16 h-16 bg-black transform rotate-45 origin-bottom-left"></div>
    <div className="absolute -bottom-6 md:-bottom-8 -right-0 w-16 h-16 bg-black transform rotate-45 origin-bottom-right"></div> */}
        </div>

        {/* blue Image Below  Contact Card */}
        <div className="absolute overflow-hidden w-full flex justify-center z-0">
          <Image
            src="/ContactBlur.png"
            alt="Contact Blur"
            height={1000}
            width={1000}
            className=" hidden sm:block sm:mt-[17rem] md:-mt-[3rem] lg:-mt-[3rem] max-w-[688px]  max-h-[42rem] overflow-hidden  "
          />
        </div>
      </div>
    </div>
  )
}

export default ContactCard
