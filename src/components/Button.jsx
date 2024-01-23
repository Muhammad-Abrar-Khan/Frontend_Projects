/* eslint-disable react/prop-types */
const Button = ({ type, text }) => {
  return (
    <button type={type} className="bg-blue-500 text-white py-2 px-4 rounded">
      {text}
    </button>
  );
};

export default Button;  // Ensure there is a default export
