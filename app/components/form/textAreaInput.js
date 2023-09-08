import React from "react";

const TextAreaInput = React.forwardRef(
  ({ onChange, id, name, label, height }, ref) => (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{label}</span>
      <textarea
        className={`h-${height} mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:border-gray-400`}
        id={id}
        name={name}
        rows="3"
        placeholder=""
        onChange={onChange}
        ref={ref}
      ></textarea>
    </label>
  )
);

TextAreaInput.displayName = "TextAreaInput";
export default TextAreaInput;
