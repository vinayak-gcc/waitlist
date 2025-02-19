import Link from "next/link";
import Image from "next/image";


const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">

       {/* Hero Background */}
          <div className="absolute top-0  z-0 left-0 w-full h-full">
            <Image
              src="/HeroBG.png"
              alt="Hero Background"
              layout="fill"
              objectFit=" "
              className=" ml-4" 
            />
          </div>

      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-30 blur-3xl"></div>

      {/* Floating Waitlist Button */}
      <button className="absolute top-10 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
        Waitlist
      </button>

      {/* 404 Text */}
      <h1 className="text-[10rem] md:text-[21rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-400 opacity-40">
        404
      </h1>

      {/* Page Not Found Text */}
      <h2 className="text-6xl -mt-36 z-10  md:text-7xl font-extrabold">
        <span className="text-white">Page </span>
        <span className="text-gray-400">Not Found!</span>
      </h2>

      {/* Back Home Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 rounded-full text-black bg-white text-black font-medium text-lg border
         border-white/20 backdrop-blur-md hover:bg-white/20 transition">
          Back home
        </button>
      </Link>


    </div>
  );
};

export default NotFound;
