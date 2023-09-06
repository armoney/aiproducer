import React from "react";

const PhoneInput = React.forwardRef(({ onChange, id, name, label }, ref) => (
  <label htmlFor={id} className="block">
    <span className="text-gray-700">{label}</span>
    <input
      type="tel"
      id={id}
      name={name}
      className="form-input mt-1 block w-full"
      maxLength="12"
      placeholder=""
      onChange={onChange}
      ref={ref}
    />
  </label>
));

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
