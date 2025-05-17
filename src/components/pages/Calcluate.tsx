import Input from "../ui/Input";
import PrimaryButton from "../ui/PrimaryButton";
import SelectInput from "../ui/SelectInput";

function Calculate() {
  return (
    <section className="py-20 px-16 flex flex-col gap-8">
      <h2 className="text-4xl  font-bold">Mortgage calculator</h2>
      <p className="w-[60%]">
        Our mortgage calculator includes key factors like homeowners association
        fees, property taxes, and private mortgage insurance (PMI). Get the
        whole picture and calculate your total monthly payment.
      </p>
      <div className="flex justify-between items-center flex-wrap">
        <Input
          variant="primary"
          size="big"
          type="number"
          name="homePrice"
          label="Home price"
        />
        <div className="flex flex-col gap-4">
          <p className="font-bold">Monthly Payment</p>
          <p className="text-3xl font-bold">$ -1524 / mo</p>
        </div>
        <PrimaryButton type="lessRounded">Get pre-approved</PrimaryButton>
      </div>
      <input
        id="small-range"
        type="range"
        min="50000"
        max="3000000"
        step="1000"
        defaultValue="300000"
        className="w-full h-1 mb-6 bg-gray-400 rounded-lg appearance-none cursor-pointer range-sm accent-green-900 "
      />
      <div className="flex justify-between items-center">
        <div className="flex  gap-8">
          <Input
            variant="secondary"
            size="small"
            type="number"
            name="zipCode"
            label="ZIP code"
          />
          <Input
            variant="secondary"
            size="small"
            type="number"
            name="downPayment"
            label="Down payment"
          />
        </div>
        <div className="flex  gap-8">
          <Input
            variant="secondary"
            size="small"
            type="number"
            name="interestRate"
            label="Interest rate"
          />
          <SelectInput />
        </div>
      </div>
      <div className="grid grid-cols-[1.2fr_1fr] gap-40 items-center">
        {/* diagram visualize  */}
        <div className="flex flex-col gap-8">
          <h3 className="text-md font-bold">Monthy payment breakdown</h3>
          <span className="font-bold text-4xl">$2,780.96/mo</span>
          <div className="flex transition-all w-[710px] ">
            <div className="border p-10 rounded-full bg-purple-900 transition-all duration-100 ease-in-out flex-[1] hover:flex-[2]"></div>
            <div className="border p-10 rounded-full bg-gray-900 transition-all duration-100 ease-in-out flex-[1] hover:flex-[2]"></div>
            <div className="border p-10 rounded-full bg-green-900 transition-all duration-100 ease-in-out flex-[1] hover:flex-[2]"></div>
            <div className="border p-10 rounded-full bg-yellow-900 transition-all duration-100 ease-in-out flex-[1] hover:flex-[2]"></div>
            <div className="border p-10 rounded-full bg-orange-900 transition-all duration-100 ease-in-out flex-[1] hover:flex-[2]"></div>
          </div>
        </div>
        {/* other fields  */}
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <label className="font-bold border-l-4 border-purple-800 px-2">
              Principal & interest
            </label>
            <p className="font-bold text-xl w-36">$1,516.96</p>
          </div>
          <div className="flex justify-between items-center">
            <label className="font-bold border-l-4 border-gray-800 px-2">
              Property taxes
            </label>
            <Input
              variant="primary"
              size="small"
              type="number"
              name="homePrice"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-bold border-l-4 border-green-800 px-2">
              Homeowners insurance
            </label>
            <Input
              variant="primary"
              size="small"
              type="number"
              name="homePrice"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-bold border-l-4 border-yellow-800 px-2">
              Homeowners insurance
            </label>
            <Input
              variant="primary"
              size="small"
              type="number"
              name="homePrice"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-bold border-l-4 border-orange-800 px-2">
              Utilities
            </label>
            <Input
              variant="primary"
              size="small"
              type="number"
              name="homePrice"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculate;
