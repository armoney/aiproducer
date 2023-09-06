import React, { forwardRef } from "react";

const UrlInput = forwardRef(function UrlInput(
  { onChange, id, name, label },
  ref
) {
  return (
    <label htmlFor="website" className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="text"
        id={id}
        name={name}
        className="form-input mt-1 block w-full"
        placeholder=""
        onChange={onChange}
        ref={ref}
      />
    </label>
  );
});
UrlInput.displayName = "UrlInput";
export default UrlInput;
