import React from "react";
type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => null;
  type?: "text" | "password" | "email";
  htmlFor?: string;
  placeholder: string;
};
const TextInput = ({
  value,
  onChange = () => null,
  type = "text",
  placeholder,
}: Props) => {
  return (
    <>
      {/* <label htmlFor={htmlFor}></label> */}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default TextInput;
