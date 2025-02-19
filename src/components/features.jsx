import {
  ArrowUpRight,
  Bell,
  BarChart3,
  RefreshCw,
  LineChart,
} from "lucide-react";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="min-h-screen scale-95 bg-black flex  flex-col  items-center justify-center py-20">
      {/* Background Text */}
      <div className="absolute bottom-0 flex justify-center items-center text-center left-0 text-[15vw] font-Helvetica font-bold text-white/5 leading-none pointer-events-none select-none">
        Join Waitlist
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Features Label */}
        <div className="inline-block px-6 py-2 rounded-full animated-border bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 mb-8 relative">
          <span className="text-white/90  text-sm font-medium relative z-10">
            Features
          </span>
          <div className="absolute inset-0 rounded-full bg-zinc-700/20 blur-xl"></div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white mb-6">
          Check our <span className="text-zinc-400">features</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg  text-zinc-400 max-w-2xl mx-auto mb-16">
          Designed to help businesses generate excitement.
        </p>

        {/* Features Container */}
        <div className="bg-zinc-900/70 scale-90 backdrop-blur-xl rounded-3xl p-2 md:p-4 flex flex-col md:flex-row gap-8 text-left relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 via-zinc-900/50 to-black/50 opacity-50 " ></div>

          {/* Graph Visualization */}
          <div className="relative md:w-1/2 aspect-square ml-2 bg-zinc-950/50 rounded-2xl  flex flex-col ">
            <div className="w-full h-full flex items-end justify-between">
              {[3, 2, 4, 4, 1].map((height, index) => (
                <div
                  key={index}
                  className="w-1/6 bg-gradient-to-t from-zinc-700 to-zinc-600 rounded-t-full"
                  style={{ height: `${height * 20}%` }}
                ></div>
              ))}
            </div>

            <div className="flex justify-between text-white/90 bg-zinc-950/70 rounded-xl py-3 px-2">
              <span className="text-3xl font-bold">15X</span>
              <span className="text-3xl font-thin"> | </span>
              <span className="text-sm">
                Higher
                <br />
                Conversion Rate
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl mt-10 text-white mb-4">
                Who can <br /> benefit
              </h3>
              <p className="text-zinc-400 mb-6">
                Start creating anticipation & managing demand effectively.
              </p>
              <ul className="space-y-3">
                {["Service providers", "E-commerce businesses"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center text-zinc-300">
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
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="relative overflow-hidden  max-w-[720px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-0" />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-20 relative z-10 ">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto ">
            {/* Feature 1 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className=" font-semibold mb-3">Real-Time Updates</h3>
              <p className="text-zinc-400 text-sm">
                Keep customers informed about their position in the waitlist.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className=" font-semibold mb-3">Priority Management</h3>
              <p className="text-zinc-400 text-sm">
                Assign priority levels to customers based on predefined
                criteria.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className=" font-semibold mb-3">Integration Capabilities</h3>
              <p className="text-zinc-400 text-sm">
                Seamlessly integrate the waitlist functionality into your
                website.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className=" font-semibold mb-3">Analytics & Insights</h3>
              <p className="text-zinc-400 text-sm">
                Gain valuable insights into customer behavior & demand.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center scale-90 mt-16 -mb-2">
            <button className="group bg-white text-black px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-zinc-200 transition-colors">
              Join Waitlist
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className=" bg-black max-w-[800px] shadow-lg shadow-white text-white p-4 flex items-center justify-center">
        <div className="mx-8 space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 mt-16">
            <h1 className="text-4xl font-medium">
              Integrati<span className="text-gray-500">ons</span>
            </h1>
            <p className="text-sm text-center max-w-xl mx-auto">
              Streamline operations, enhance functionality & provide a <br />{" "}
              unified experience across your digital ecosystem.
            </p>
          </div>

          {/* Integration */}
          <div className="">
            {/* Icons */}
            <div className="relative my-8 ">
              <Image src="/5Logos.png" alt="Logos" height={1000} width={500} />
            </div>

            {/* Search Section */}
            <div className="space-y-6 my-4 ">
              <h2 className="text-3xl text-center mt-16">
                Connect your <span className="text-gray-500">tools</span>
              </h2>
              <div className="relative border  border-gray-600 rounded-xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search integration..."
                  className="w-full bg-black border-gray-800 pl-10 h-12 text-gray-600 placeholder:white"
                />
              </div>
            </div>

            {/* Line */}
            {/* <div className="h-[0.1rem] w-full bg-white mt-8"></div> */}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 my-10 ">
              <button className="text-gray-400 hover:text-white hover:bg-gray-900 py-2 px-4 rounded">
                Cancel
              </button>
              <button className="bg-white text-black hover:bg-gray-200 py-2 px-4 rounded">
                <span className="mr-2">+</span> Add tool
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
