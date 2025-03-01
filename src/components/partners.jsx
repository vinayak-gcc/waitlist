import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const partners = [
    "Trace",
    "Product",
    "Glossy",
    "Minty",
    "Border",
    "Proline",
    "Invert",
  ];
  // Repeat partners twice to ensure seamless loop
  const repeatedPartners = [...partners, ...partners,  ...partners, ...partners]; 

  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      {/* Background Grid with Gradient Overlays */}
      <div className="relative max-w-[38rem] w-full mx-auto h-[12rem] overflow-hidden rounded-3xl shadow-lg mb-8">
        {/* Left Gradient Overlay */}
        <div className="absolute top-0 left-0 h-full w-96 bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>
        {/* Right Gradient Overlay */}
        <div className="absolute top-0 right-0 h-full w-96 bg-gradient-to-l from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-4 gap-3 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/15 bg-white/2"
            ></div>
          ))}
        </div>
      </div>
      {/* Center Text Container */}
      <div className="relative z-10 -mt-[12rem]">
        {/* Label */}
        <div className="inline-block scale-90 px-6 py-2 mt-10 rounded-full bg-black shadow-[0_0_20px_rgba(255,255,255,0.45)] mb-8 relative z-20">
          <span className="text-white text-sm font-medium rounded-full relative z-10">
            Our Partners
          </span>
          <div className="absolute inset-0 rounded-full bg-zinc-700/20 blur-xl"></div>
        </div>
        {/* Heading */}
        <h2 className="text-3xl scale-95 font-semibold text-white mb-6 relative z-20">
          Trusted by <span className="text-zinc-400">Brands</span>
        </h2>
        {/* Subtitle */}
        <p className="text-white/90 max-w-2xl mx-auto mb-16 relative z-20 text-sm px-4 lg:px-0">
          We collaborate with industry-leading partners to <br /> bring you the
          best in class services.
        </p>
      </div>

        <div className="relative border-none overflow-hidden w-full rounded-[40px] max-w-[40rem] scale-90">
          {/* Left Gradient Overlay */}
          <div className="absolute top-0 -left-6 h-full w-24 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-40"></div>
          {/* Right Gradient Overlay */}
          <div className="absolute top-0 -right-6 h-full w-24 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-40"></div>
          {/* Scrolling Container */}
          <Marquee loop={0} >

          <div className=" border-none flex space-x-4 scale-[0.85]">
            {repeatedPartners.map((name, i) => (
              <Image
                key={i}
                src={`/${name}.png`}
                alt={name}
                height={120}
                width={220}
                className="px-12 py-6 rounded-[20px] border border-white/50 text-md"
                style={{
                  boxShadow: `
                    inset 0px 10px 40px rgba(255, 255, 255, 0.12),
                    inset 0px -5px 10px rgba(255, 255, 255, 0.12),
                    inset 5px 0px 10px rgba(255, 255, 255, 0.12),
                    inset -5px 0px 10px rgba(255, 255, 255, 0.12)
                  `,
                }}
              />
            ))}
          </div>
          </Marquee>

        </div>
    </div>
  );
};

export default Partners;
