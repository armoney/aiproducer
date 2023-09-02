const TextAreaInput = ({ onChange, id, name, label, height }) => {
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{label}</span>
      <textarea
        className={`form-textarea mt-1 block w-full h-${height}`}
        id={id}
        name={name}
        rows="3"
        placeholder=""
        onChange={onChange}
      ></textarea>
    </label>
  );
};
export default TextAreaInput;
