import React from "react";
type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email";
  htmlFor?: string;
  placeholder: string;
  name: string;
};

function TextInput({
  value,
  onChange = () => null,
  type = "text",
  placeholder = "",
  name = "",
}: Props) {
  return (
    <>
      {/* <label htmlFor={htmlFor}></label> */}
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
}

export default TextInput;
