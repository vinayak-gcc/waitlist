import React from 'react'

const FeatureBento = () => {
  return (
    <div>
      <div
  className="relative md:max-h-[22rem] scale-90 w-full mx-auto max-w-[720px] shadow-[0_0_20px_rgba(255,255,255,0.85)]
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
    <div className="w-full border-none rounded-2xl p-2 mt-4 h-64 flex items-end md:justify-between bg-gradient-to-t from-black/50 to-transparent">
      {[3, 2, 4, 4, 1].map((height, index) => (
        <div
          key={index}
          className="w-8 bg-gradient-to-t sm:ml-6 md:ml-0 from-gray-800 to-gray-500 mx-2 sm:mx-0 md:mx-2 rounded-t-full"
          style={{ height: `${height * 20}%` }}
        ></div>
      ))}
    </div>
    
    {/* 15X | Higher Text */}
    <div className="flex space-x-4 sm:ml-4 md:ml-0 sm:space-x-4 md:space-x-0 md:justify-between text-white bg-gradient-to-r from-black/20 via-black/40 to-black/20 rounded-xl py-2 mb-4 px-4 shadow-md">
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
  <div className="relative scale-90 mx-4 -ml-0.5 sm:-ml-0 md:mx-0 md:w-1/2 flex  flex-col justify-between">
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
