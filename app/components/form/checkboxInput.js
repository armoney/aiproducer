const CheckboxInput = ({ onChange, id, name, label }) => {
  return (
    <label htmlFor={id} className="inline-flex items-center">
      <input
        className="form-checkbox"
        name={name}
        id={id}
        type="checkbox"
        onChange={onChange}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};
export default CheckboxInput;
