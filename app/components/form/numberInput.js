import React from "react";

const NumberInput = React.forwardRef(({ onChange, id, name, label }, ref) => (
  <label htmlFor="yearsWorked" className="block">
    <span className="text-gray-700">{label}</span>
    <input
      type="number"
      id={id}
      name={name}
      className="form-input mt-1 block w-full"
      onChange={onChange}
      ref={ref}
    />
  </label>
));
NumberInput.displayName = "NumberInput";

export default NumberInput;
