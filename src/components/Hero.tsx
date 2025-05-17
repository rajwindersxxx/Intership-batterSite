import { FaGooglePlay, FaStar } from "react-icons/fa";
import PrimaryButton from "./ui/PrimaryButton";

function Hero() {
  return (
    <section className="bg-green-900 text-white h-screen pt-32 relative overflow-hidden   ">
      <div className="container  flex flex-col gap-28 items-center mx-auto z-20 relative" >
        <h1 className="text-8xl font-bold text-green-400 text-center">
          Mortgages made simple
        </h1>
        <div className="flex justify-between container max-w-[60%] items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <PrimaryButton className="text-xl font-bold px-12 py-4">
              Start my approval
            </PrimaryButton>
            <span className="font-bold">3min | No credit impact</span>
          </div>
          <div className="">
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
      <div  className="absolute left-[52%] -translate-x-[43%] -bottom-36 z-0 ">
        <img
          src="./hero-variant.webp"
        />
      </div>
    </section>
  );
}

export default Hero;
