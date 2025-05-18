import React from "react";

import useInput from "../../hooks/useInput";

interface props {
  label?: string;
  name: string;
  children: React.ReactNode;
}
function SelectInput({ label, name, children }: props) {
  const { value, handleChange } = useInput(name);
  return (
    <label className="flex gap-2 flex-col " htmlFor="loanYears">
      {label && <span className={`font-bold`}>{label}</span>}
      <div
        className={`border border-black  rounded-md  flex hover:ring ring-green-700 text-md  max-w-36 pr-4 gap-3 transition-all"
        }`}
      >
        <select
          id="loanYears"
          name={name}
          className="w-full outline-none bg-white p-3 rounded-md"
          value={value}
          onChange={handleChange}
        >
          {children}
        </select>
      </div>
    </label>
  );
}

export default SelectInput;
