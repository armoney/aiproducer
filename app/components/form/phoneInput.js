const PhoneInput = ({ onChange, id, name, label }) => {
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="tel"
        id={id}
        name={name}
        className="form-input mt-1 block w-full"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder=""
        onChange={onChange}
      />
    </label>
  );
};

export default PhoneInput;
