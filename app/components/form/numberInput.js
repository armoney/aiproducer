const NumberInput = ({ onChange, id, name, label }) => {
  return (
    <label htmlFor="yearsWorked" className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="number"
        id={id}
        name={name}
        className="form-input mt-1 block w-full"
        onChange={onChange}
      />
    </label>
  );
};
export default NumberInput;
