import { ShimmerInput } from '../magicui/ShimmerInput';

const WaitlistForm = () => {
  return (
    <div className="relative mt-[12rem] sm:mt-[10rem] lg:mt-[9.5rem] flex items-center justify-center">
      {/* Backdrop Filter  for Backdop Filter effect*/}
      <div
        className="absolute w-full md:w-[580px] h-[360px] sm:h-[300px] md:h-[280px] backdrop-blur-[30px] rounded-[40px]
         bg-white/5 border border-white/30 shadow-[inset_0px_0px_30px_rgba(255,255,255,0.2),0px_10px_20px_rgba(0,0,0,0.4)] 
         overflow-visible box-border z-[-1]"
        style={{
          boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px inset, rgba(0, 0, 0, 0.4) 0px 10px 20px",
        }}
      ></div>
      {/* Inner Container */}
      <div
        className="absolute w-full  md:w-[580px]  h-[360px]  sm:h-[300px] md:h-[280px] rounded-[40px] bg-black/20
         border border-white/30 shadow-[inset_0px_0px_30px_rgba(255,255,255,0.2),0px_10px_20px_rgba(0,0,0,0.4)] overflow-visible 
         box-border z-10"
        style={{
          boxShadow: "rgba(255, 255, 255, 0.1) 0px 0px 30px inset, rgba(0, 0, 0, 0.4) 0px 10px 20px",
        }}
      >
        {/* Light Reflection */}
        {/* <div
          className="absolute top-[-40px] left-[20px] w-[80px] h-[80px] bg-white/20 rounded-full blur-[30px] opacity-60 pointer-events-none"
        ></div> */}
        {/* Content */}
        <div className="relative z-10 text-white p-8 flex flex-col items-center justify-center h-full">
          {/* Title */}
          <h2
            className="text-center text-3xl font-semibold mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              color: "rgb(255, 255, 255)",
            }}
          >
            Join our waitlist!
          </h2>
          {/* Description */}
          <p
            className="text-center text-sm mx-10 mb-8 max-w-[20rem] md:max=w-[26rem]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              color: "rgb(255, 255, 255)",
            }}
          >
            Sign up for our newsletter to receive the latest updates and insights straight to your inbox.
          </p>
          {/* Input and Button */}
          <form className="w-full flex items-center justify-center flex flex-col md:flex-row gap-4">
            {/* Input Field */}
            <ShimmerInput />
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                borderRadius: "40px",
                boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.4)",
              }}
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;