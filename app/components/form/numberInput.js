import React from "react";

const NumberInput = React.forwardRef(
  ({ onChange, min = 0, max, id, name, label }, ref) => (
    <label htmlFor="yearsWorked" className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="number"
        id={id}
        name={name}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:border-gray-400"
        onChange={onChange}
        ref={ref}
        min={min}
        max={max}
      />
    </label>
  )
);
NumberInput.displayName = "NumberInput";

export default NumberInput;
