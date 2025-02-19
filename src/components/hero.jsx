import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black/95 text-white relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/HeroBG.png"
          alt="Hero Background"
          layout="fill"
          objectFit=""
          className="-mt-16 ml-4"
        />
      </div>

      {/* Navigation */}
      <nav className="container relative flex items-center justify-center mx-auto px-0 z-50">
        <div className="relative mx-2 mt-8">
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 rounded-full" />
          <div className="relative z-10 flex items-center space-x-8 px-6 py-2 rounded-full text-white">
            <span className="text-2xl font-bold">
              {" "}
              <a href="#/">W</a>{" "}
            </span>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#Hero" className="hover:text-gray-300">
                Hero
              </a>
              <a href="#Partner" className="hover:text-gray-300">
                Partners
              </a>
              <a href="#Features" className="hover:text-gray-300">
                Features
              </a>
              <a href="#Testimonials" className="hover:text-gray-300">
                Testimonials
              </a>
              <a href="#Faq" className="hover:text-gray-300">
                FAQ
              </a>
              <p>|</p>
              <a href="404" className="hover:text-gray-300">
                404
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-10 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          <h1 className="text-6xl tracking-[-0.08em] md:text-7xl font-semibold text-center mb-4">
            Coming soon!
          </h1>

          {/* Waitlist Form */}
          <div className="max-w-2xl mx-auto p-8 md:p-12 border mt-6 border-white/10 rounded-[50px] relative">
            <div className="absolute inset-0 backdrop-blur-md bg-white/10 rounded-[50px]" />
            <div className="relative z-10 text-white">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Join our waitlist!
              </h2>
              <p className="text-center text-gray-300 mb-8">
                Sign up for our newsletter to receive the latest updates and
                insights straight to your inbox.
              </p>
              <div className="flex flex-col justify-center items-center  md:flex-row gap-4">
               <div className="animated-border">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="bg-black/40  placeholder:text-gray-500 text-start rounded-[40px] px-8 py-3 "
                />
                </div>
                <button className="bg-white text-xs font-semibold ml-3 text-black px-4 py-3 rounded-full hover:bg-gray-200 transition">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="#"
              className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
