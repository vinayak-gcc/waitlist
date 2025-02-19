import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="flex flex-col  min-h-screen justify-center items-center text-center">
      {/* Label */}
      <div className="inline-block px-6 py-2 mt-10 rounded-full bg-zinc-900/80 backdrop-blur-sm animated-border mb-8 relative">
        <span className="text-white/90 text-sm font-medium relative z-10">
          Our Partners
        </span>
        <div className="absolute inset-0 rounded-full bg-zinc-700/20 blur-xl"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-white mb-6">
        Trusted By <span className="text-zinc-400">Brands</span>
      </h2>

      {/* Subtitle */}
      <p className=" text-zinc-400 max-w-2xl mx-auto mb-16">
        We collaborate with industry-leading partners to <br /> bring you the
        best in class services.
      </p>

      {/* Scrolling Partner Logos */}
      <div className="relative overflow-hidden w-full max-w-[36rem] scale-90">
        <div className="scroll-container flex space-x-4 animate-scroll">
          {/* First Set of Logos */}
          <Image
            src="/Trace.png"
            alt="Trace"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Product.png"
            alt="Product"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Glossy.png"
            alt="Glossy"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Minty.png"
            alt="Minty"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Border.png"
            alt="Border"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Proline.png"
            alt="Proline"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Invert.png"
            alt="Invert"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />

          {/* Duplicate Set for Seamless Loop */}
          <Image
            src="/Trace.png"
            alt="Trace"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Product.png"
            alt="Product"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Glossy.png"
            alt="Glossy"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Minty.png"
            alt="Minty"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Border.png"
            alt="Border"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Proline.png"
            alt="Proline"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
          <Image
            src="/Invert.png"
            alt="Invert"
            height={120}
            width={200}
            className="px-8 py-6 bg-white/10 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
