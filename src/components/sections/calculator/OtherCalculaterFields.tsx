import { useAppSelector } from "../../../hooks";
import Input from "../../ui/Input";
const fields = [
  {
    label: "Property taxes",
    borderColor: "border-gray-800",
    name: "taxes",
  },
  {
    label: "Homeowners insurance",
    borderColor: "border-green-800",
    name: "insurance",
  },
  {
    label: "HOA fees",
    borderColor: "border-yellow-800",
    name: "hoaFees",
  },
  {
    label: "Utilities",
    borderColor: "border-orange-800",
    name: "utilities",
  },
];
function OtherCalculatorFields() {
  const { princeInterest } = useAppSelector((state) => state.calculator);
  return (
    <div className="flex flex-col gap-8 min-w-[25rem]">
      <div className="flex justify-between items-center">
        <label className="font-bold border-l-4 border-purple-800 px-2">
          Principal & interest
        </label>
        <p className="font-bold text-xl w-36">${princeInterest.toLocaleString()}</p>
      </div>
      {fields.map(({ label, borderColor, name }) => (
        <div className="flex justify-between items-center" key={name}>
          <label className={`font-bold border-l-4 ${borderColor} px-2`}>
            {label}
          </label>
          <Input variant="primary" size="small" type="number" name={name} />
        </div>
      ))}
    </div>
  );
}

export default OtherCalculatorFields;
