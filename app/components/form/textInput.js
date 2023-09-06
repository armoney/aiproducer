import React from "react";

const TextInput = React.forwardRef(({ onChange, id, name, label }, ref) => (
  <label htmlFor={id} className="block">
    <span className="text-gray-700">{label}</span>
    <input
      type="text"
      className="form-input mt-1 block w-full"
      placeholder=""
      id={id}
      name={name}
      onChange={onChange}
      ref={ref}
    />
  </label>
));

TextInput.displayName = "TextInput";

export default TextInput;
