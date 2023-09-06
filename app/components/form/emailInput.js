import React from "react";

const EmailInput = React.forwardRef(({ onChange, id, name, label }, ref) => (
  <label htmlFor={id} className="block">
    <span className="text-gray-700">{label}</span>
    <input
      type="email"
      id={id}
      name={name}
      className="form-input mt-1 block w-full"
      placeholder=""
      onChange={onChange}
      ref={ref}
    />
  </label>
));

EmailInput.displayName = "EmailInput";

export default EmailInput;
