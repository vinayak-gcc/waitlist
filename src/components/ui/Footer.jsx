import React from 'react';
import Image from "next/image";


const Footer = () => {
  return (
    <div>
      <div className="relative w-screen h-[13.5rem] 2xl:h-[16rem] -mt-10 overflow-hidden">
        {/* Gradient Overlay for Text */}
        <div className="absolute Helvetica inset-0 flex items-center justify-center z-20">
          <div className="text-[22vw] z-20 2xl:text-[10vw] font-semibold leading-none pointer-events-none select-none bg-clip-text text-transparent bg-gradient-to-r from-white/50 via-white/65 to-white/50 " 
  //           style={{
  //   textShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)", // Shadow applied to the text
  // }}
          >
            Contact
          </div>

          {/* Footer Image */}
          <div className="absolute w-screen h-[14rem] xl:h-[16rem]  z-0 w-full flex justify-center z-0">
            <Image
              src="/FooterBG.png"
              alt="Footer Background"
              height={2000}
              width={2000}
              className="opacity-[0.9] h-[120vh] -mt-[28rem]  "
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
