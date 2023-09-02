const EmailInput = ({ onChange, id, name, label }) => {
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="email"
        id={id}
        name={name}
        pattern=".+@\.com"
        className="form-input mt-1 block w-full"
        placeholder=""
        onChange={onChange}
      />
    </label>
  );
};
export default EmailInput;
