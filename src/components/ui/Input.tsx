import { useRef } from "react";
import useInput from "../../hooks/useInput";
interface props {
  variant: "percent" | "money" | "primary" | "secondary";
  size?: "big" | "small";
  type: string;
  name: string;
  label?: string;
}
function Input({
  variant,
  size = "small",
  type,
  name,
  label,
  ...props
}: props) {
  const { value, handleChange } = useInput(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
      inputRef?.current?.select();

  };
  if (variant === "primary")
    return (
      <label className="flex gap-2 flex-col">
        {label && <span className={`font-bold`}>{label}</span>}
        <div
          className={`border border-black  rounded-md  flex hover:ring ring-green-700 transition-all  bg-white  ${
            size === "big"
              ? "text-3xl font-bold max-w-72 p-4  gap-4 "
              : "text-md  max-w-36 p-3 gap-3"
          }`}
        >
          $
          <input
            ref={inputRef}
            type={type}
            id="home_price"
            name={name}
            className="w-full outline-none "
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            {...props}
          />
        </div>
      </label>
    );
  if (variant === "secondary")
    return (
      <label className="flex gap-2 flex-col ">
        {label && <span className={`font-bold`}>{label}</span>}
        <div
          className={`border border-black  rounded-md  flex hover:ring ring-green-700  transition-all  bg-white  ${
            size === "big"
              ? "text-3xl font-bold max-w-72 p-4  gap-4 "
              : "text-md  max-w-36 p-3 gap-3"
          }`}
        >
          <input
            type={type}
            id="home_price"
            name={name}
            className="w-full outline-none "
            value={value}
            onChange={handleChange}
            ref={inputRef}
            onFocus={handleFocus}
            {...props}
          />
        </div>
      </label>
    );
}

export default Input;
