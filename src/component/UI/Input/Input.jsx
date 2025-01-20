const Input = (props) => {
  const { type, hintText, onChange, value } = props;
  return (
    <input
      className="px-[20px] py-[16px] w-full bg-transparent rounded-[10px]"
      value={value}
      onChange={onChange}
      type={type || "text"}
      placeholder={hintText}
    />
  );
};

export default Input;
