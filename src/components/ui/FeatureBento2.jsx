"use client"
import React from 'react'
import { useEffect, useState } from "react"
const FeatureBento = () => {

  const [barHeights, setBarHeights] = useState([40, 60, 80, 70, 30])

  // Simulate equalizer animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights((prevHeights) => prevHeights.map(() => Math.floor(Math.random() * 80) + 20))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div
  className="relative max-h-[22rem] scale-90 w-full mx-auto max-w-[720px] shadow-[0_0_20px_rgba(255,255,255,0.85)]
 rounded-3xl p-2 md:p-4 flex flex-col md:flex-row gap-8 text-left overflow-hidden"
  style={{
    background: `linear-gradient(to bottom, #0b0c0f, #13161d, #0b0c0f)`,
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 blur-3xl"></div>

  {/* Graph Visualization  - Left Side*/}
  <div className="md:w-1/2 bg-black/20  rounded-2xl gap-4 flex flex-col px-2 my-2 relative border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
    {/* Graph */}
       <div className="w-full h-[16rem] md:max-w-md bg-black/90 rounded-3xl p-2 relative border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div className="w-full h-[12rem] flex items-end justify-between gap-3 px-2">
        {barHeights.map((height, index) => (
          <div
            key={index}
            className="w-full rounded-t-lg bg-gradient-to-t from-gray-800/80 to-gray-500/60"
            style={{
              height: `${height}%`,
              transition: "height 0.5s ease-in-out",
            }}
          ></div>
        ))}
      </div>
    </div>
    
    {/* 15X | Higher Text */}
    <div className="flex space-x-4 sm:space-x-4 md:space-x-0 md:justify-between text-white bg-gradient-to-r from-black/20 via-black/40 to-black/20 rounded-xl py-2 mb-4 px-4 shadow-md">
      <span className="text-4xl font-bold">15X</span>
      <span className="text-4xl font-thin"> | </span>
      <span className="text-md text-white font-poppins">
        Higher
        <br />
        Conversion Rate
      </span>
    </div>
  </div>

  {/* Content - Right Side */} 
  <div className="relative scale-90 mx-4 md:mx-0 md:w-1/2 flex  flex-col justify-between">
    <div>
      <h3 className="text-3xl font-semibold md:mt-10 text-white mb-4">
        Who can <br /> benefit
      </h3>
      <p className="text-white/80 mb-10 text-md">
        Start creating anticipation & <br /> managing demand effectively.
      </p>
      <ul className="space-y-3 mb-8 md:mb-0">
        {["Service providers", "E-commerce businesses"].map((item, index) => (
          <li key={index} className="flex items-center text-white/90">
            <svg
              className="w-5 h-5 mr-3 text-green-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default FeatureBento
