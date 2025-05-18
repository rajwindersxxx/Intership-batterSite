import { FaGooglePlay, FaStar } from "react-icons/fa";
import PrimaryButton from "../../ui/PrimaryButton";
import { useUI } from "../../context/UIContext";

function Hero() {
  const { heroRef } = useUI();
  return (
    <section
      className="bg-green-900 text-white h-screen md:py-32 py-16 relative overflow-hidden   "
      ref={heroRef}
    >
      <div className="container  flex flex-col md:gap-28 gap-8 items-center mx-auto z-20 relative h-full">
        <h1 className=" md:text-8xl text-5xl font-bold text-green-400 text-center">
          Mortgages made simple
        </h1>
        <div className="flex justify-between container max-w-[60%]  md:items-start items-center  md:flex-row flex-col h-full md:pb-0 pb-12">
          <div className="flex flex-col gap-2 justify-center items-center">
            <PrimaryButton className="text-xl font-bold px-12 py-4">
              Start my approval
            </PrimaryButton>
            <span className="font-bold">3min | No credit impact</span>
          </div>
          <div className="bg-black/40 md:bg-transparent px-4 py-2 rounded-md">
            <div className="flex gap-1 items-center  mb-4 justify-center ">
              <FaGooglePlay className="h-6 w-6 mt-1 text-green-300" />
              <FaStar className="h-6 w-7 text-yellow-500" />
              <FaStar className="h-6 w-7 text-yellow-500" />
              <FaStar className="h-6 w-7 text-yellow-500" />
              <FaStar className="h-6 w-7 text-yellow-500" />
              <FaStar className="h-6 w-7 text-yellow-500" />
            </div>
            <p className="font-bold">4.6 stars | 3177 Google reviews</p>
          </div>
        </div>
      </div>
      <div className="absolute left-[52%] -translate-x-[43%] -bottom-36 z-0 w-[620px]">
        <img src="./hero-variant.webp" />
      </div>
    </section>
  );
}

export default Hero;
