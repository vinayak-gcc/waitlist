import React from 'react'
import {
    ArrowUpRight,
    Bell,
    BarChart3,
    RefreshCw,
    LineChart,
  } from "lucide-react";
  
const FeatureCards = () => {
  return (
    <div>
        <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />

        {/* Main Content */}
        <div className="mx-auto px-4 pb-20 relative z-20">
          {/* Features Grid */}
          <div className="grid grid-cols-1 text-white px-8 md:px-0 md:grid-cols-2 gap-6 relative z-30 scale-[0.9] mx-auto max-w-[660px]">
            {/* Feature 1 */}
            <div className="bg-zinc-900/60 rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 scale-90 -ml-2 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-3">Real-Time Updates</h3>
              <p className="text-white/90 text-sm">
                Keep customers informed about their position in the waitlist.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-900/60 rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 scale-90 -ml-2 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-3">Priority Management</h3>
              <p className="text-white/90 text-sm">
                Assign priority levels to customers based on predefined
                criteria.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-900/60 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 scale-90 -ml-2 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-3">Integration Capabilities</h3>
              <p className="text-white/90 text-sm">
                Seamlessly integrate the waitlist functionality into your
                website.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-zinc-900/60 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 scale-90 -ml-2 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-3">Analytics & Insights</h3>
              <p className="text-white/90 text-sm">
                Gain valuable insights into customer behavior & demand.
              </p>
            </div>
          </div>

          {/* Join Waitlist Text - MOVED TO LOWER Z-INDEX */}
          <div className="relative w-screen h-[13.5rem] 2xl:h-[24rem] -mt-20 lg:-mt-16 xl:-mt-20 2xl:-mt-36 z-10">
            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 Helvetica flex items-center justify-center">
              <div className="text-[16vw] md:text-[14vw] lg:text-[14vw] font-semibold leading-none pointer-events-none select-none bg-clip-text text-transparent bg-gradient-to-r from-white/40 via-white/80 to-white/55">
                Join Waitlist
              </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Join Button */}
          <div className="text-center scale-90 -mt-2 mb-40 relative z-30">
            <button className="group bg-white text-black px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:scale-105 hover:shadow-sm hover:bg-zinc-200 transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.85)] ">
              Join Waitlist
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCards