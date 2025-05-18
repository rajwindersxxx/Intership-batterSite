import useInput from "../../hooks/useInput";
interface props {
  min: number;
  max: number;
  step: number;
  name: string;
}
function RangeInput({ min, max, step, name }: props) {
 const {value, handleChange} =  useInput(name)
  return (
    <input
      id="small-range"
      type="range"
      min={min}
      max={max}
      step={step}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full h-1 mb-6 bg-gray-400 rounded-lg appearance-none cursor-pointer range-sm accent-green-900 "
    />
  );
}

export default RangeInput;
