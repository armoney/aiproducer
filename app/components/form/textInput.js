import React from "react";

const TextInput = React.forwardRef(({ onChange, id, name, label }, ref) => (
  <label htmlFor={id} className="block">
    <span className="text-gray-700">{label}</span>
    <input
      type="text"
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:border-gray-400"
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