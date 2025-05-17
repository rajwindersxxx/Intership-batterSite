function SelectInput() {
  return (
    <label className="flex gap-2 flex-col " htmlFor="loanYears">
      <span className={`font-bold`}>Length of loan (years)</span>
      <div
        className={`border border-black  rounded-md  flex hover:ring ring-green-700 text-md  max-w-36 p-3 gap-3 transition-all"
        }`}
      >
        <select
          id="loanYears"
          defaultValue="4235"
          className="w-full outline-none "
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </label>
  );
}

export default SelectInput;
