import { TextField } from "@mui/material";

type Props = {
  name?: string;
  label: string;
  value: string;
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "password" | "email";
};

function MuiTextInput({
  name = "",
  label,
  onChange = () => null,
  type = "text",
  value,
  required = true,
}: Props) {
  return (
    <TextField
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
      required={required}
      fullWidth
      autoFocus
      margin="normal"
    />
  );
}

export default MuiTextInput;
