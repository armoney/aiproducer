import React from "react";

const CheckboxInput = React.forwardRef(({ onChange, id, name, label }, ref) => (
  <label htmlFor={id} className="inline-flex items-center">
    <input
      className="form-checkbox"
      name={name}
      id={id}
      type="checkbox"
      onChange={onChange}
      ref={ref}
    />
    <span className="ml-2">{label}</span>
  </label>
));

CheckboxInput.displayName = "CheckboxInput";

export default CheckboxInput;
