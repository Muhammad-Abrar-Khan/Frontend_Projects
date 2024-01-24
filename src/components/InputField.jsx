const InputField = ({ type, placeholder, value, onChange }) => {
  const customStyle = {
    borderColor: 'blue-500',
    color: '#3d434a',
    backgroundColor: '#F3F3FF',
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-dotted border w-full h-10 rounded px-2 py-1" // Change the background color class here
        style={customStyle}
      />
    </div>
  );
};

export default InputField;
