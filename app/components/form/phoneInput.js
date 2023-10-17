import React from "react";
import ErrorMessage from "./errorMessage";

const PhoneInput = React.forwardRef(
  ({ onChange, id, name, label, errorMessage }, ref) => (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="tel"
        id={id}
        name={name}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 hover:border-gray-400"
        maxLength="12"
        placeholder=""
        onChange={onChange}
        ref={ref}
      />
      <ErrorMessage message={errorMessage} />
    </label>
  )
);

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
