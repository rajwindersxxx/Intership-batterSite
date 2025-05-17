import PrimaryButton from "./ui/PrimaryButton";

function AboutCEO() {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 max-w-[80%] mx-auto h-[40.5rem] items-center">
      <div>
        <h2 className="text-3xl font-bold mb-12">The status quo is broken</h2>
        <p className="mb-8">
          The traditional processes around homeownership are opaque and
          stressful. Fees aren't transparent and some are simply outrageous in
          size. Traditional mortgage lending is rife with unnecessary fees and
          slow, painful processes. It's a system set up to benefit insiders —
          not you. Better.com CEO, Vishal Garg, set out to change that.
        </p>
        <PrimaryButton type="lessRounded">Read Vishal's story</PrimaryButton>
      </div>
      <div className="justify-self-end">
        <button className="relative w-[400px] h-[300px] overflow-hidden content-end">
          <img
            src="./vishal-mission.webp"
            className="w-full h-full object-cover object-right"
          />
          <img
            src="./play.svg"
            className="absolute h-32 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 object-fill"
          />
        </button>
      </div>
    </div>
  );
}

export default AboutCEO;
