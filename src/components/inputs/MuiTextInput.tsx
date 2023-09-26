import { TextField } from "@mui/material";

type Props = {
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: "text" | "password" | "email";
};

export default function MuiTextInput({
  name = "",
  label,
  onChange = () => null,
  type = "text",
  value,
}: Props) {
  return (
    <TextField
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
      required
      fullWidth
      autoFocus
      margin="normal"
    />
  );
}
