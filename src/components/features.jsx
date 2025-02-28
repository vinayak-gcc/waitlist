import FeatureCards from "./ui/FeatureCards";
import Integrations from "./ui/Integrations";
import FeatureBento from "./ui/FeatureBento";
export default function Features() {
  return (
    <section className="min-h-screen  bg-black flex  flex-col  items-center justify-center py-20">
      
      {/* Features */}
      <div className=" mx-auto text-center w-full z-10  scale-90 ">
        {/* Features Label */}
        <div className="mx-6 mb-10 w-32 mx-auto px-0 px-2 py-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.55)]  border border-zinc-800  relative">
          <span className="text-white  text-md px-2 font-medium relative z-10">
            Features
          </span>
          <div className="absolute inset-0 rounded-full bg-zinc-700/20 blur-xl"></div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white mb-6 mt-8">
          Check our <span className="text-zinc-400">features</span>
        </h2>

        {/* Subtitle */}
        <p className="text-md  text-white max-w-2xl mx-auto mb-16">
          Designed to help businesses generate excitement.
        </p>

        {/* Features Container */}
<FeatureBento />

      </div>

      {/*4 Feature Cards */}
       <FeatureCards />

      {/* Integrations */}
      <Integrations />

    </section>
  );
}
