const TextInput = ({ onChange, id, name, label }) => {
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="text"
        className="form-input mt-1 block w-full"
        placeholder=""
        id={id}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};
export default TextInput;
