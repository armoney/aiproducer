const UrlInput = ({ onChange, id, name, label }) => {
  return (
    <label htmlFor="website" className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="url"
        id={id}
        name={name}
        className="form-input mt-1 block w-full"
        placeholder=""
        onChange={onChange}
      />
    </label>
  );
};
export default UrlInput;
