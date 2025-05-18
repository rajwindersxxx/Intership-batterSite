import { useAppSelector } from "../../hooks";
import CalculatorVisual from "../sections/calculator/CalculatorVisual";
import Input from "../ui/Input";
import OtherCalculatorFields from "../sections/calculator/OtherCalculaterFields";
import PrimaryButton from "../ui/PrimaryButton";
import RangeInput from "../ui/RangeInput";
import SelectInput from "../ui/SelectInput";

function Calculate() {
  const { monthlyPayment } = useAppSelector((state) => state.calculator);
  return (
    <section className="   flex flex-col gap-8">
      <div className="flex flex-col gap-8 bg-green-50 py-20 md:px-16 px-4">
        <h2 className="text-4xl  font-bold">Mortgage calculator</h2>
        <p className="md:w-[60%]">
          Our mortgage calculator includes key factors like homeowners association
          fees, property taxes, and private mortgage insurance (PMI). Get the
          whole picture and calculate your total monthly payment.
        </p>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <Input
            variant="primary"
            size="big"
            type="number"
            name="homePrice"
            label="Home price"
          />
          <div className="flex flex-col gap-4">
            <p className="font-bold">Monthly Payment</p>
            <p className="text-3xl font-bold">$ {monthlyPayment.toLocaleString()} / mo</p>
          </div>
          <PrimaryButton type="lessRounded">Get pre-approved</PrimaryButton>
        </div>
        <RangeInput min={50000} max={3000000} step={1000} name="homePrice" />
        {/* Second row */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 ">
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
          <div className="flex  gap-8 md:justify-self-end ">
            <Input
              variant="secondary"
              size="small"
              type="number"
              name="interestRate"
              label="Interest rate"
            />
            <SelectInput label="Length of loan (years)" name="loanYears">
              <option value={30}>30</option>
              <option value={20}>20</option>
              <option value={15}>15</option>
            </SelectInput>
          </div>
        </div>
      </div>
      {/* Third row */}
      <div className="grid md:grid-cols-[1.2fr_1fr] lg:gap-40 gap-12 items-center grid-cols-1 md:px-16 px-4">
        <CalculatorVisual />
        <OtherCalculatorFields />
      </div>
    </section>
  );
}

export default Calculate;
