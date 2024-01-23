/* eslint-disable react/prop-types */


const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded px-2 py-1"
    />
  );
};

export default InputField;  // Ensure there is a default export
