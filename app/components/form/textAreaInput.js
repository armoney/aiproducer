import React from "react";

const TextAreaInput = React.forwardRef(
  ({ onChange, id, name, label, height }, ref) => (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{label}</span>
      <textarea
        className={`form-textarea mt-1 block w-full h-${height}`}
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
