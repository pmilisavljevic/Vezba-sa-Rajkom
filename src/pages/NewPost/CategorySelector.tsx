import { PropsWithChildren } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  category: string;
  onChange: (e: SelectChangeEvent<string>) => void;
} & PropsWithChildren;

export default function CategorySelector({ category, onChange }: Props) {
  //   const [category, setCategory] = useState("");
  //   console.log(category);

  //   const handleChange = (event: SelectChangeEvent) => {
  //     setCategory(event.target.value);
  //   };

  return (
    <div>
      <FormControl sx={{ mt: 2, minWidth: 120 }}>
        <InputLabel>Category</InputLabel>
        <Select
          id="demo-simple-select-helper"
          value={category}
          label="Category"
          name="category"
          onChange={onChange}
        >
          <MenuItem value={"science"}>#science</MenuItem>
          <MenuItem value={"world"}>#world</MenuItem>
          <MenuItem value={"music"}>#music</MenuItem>
          <MenuItem value={"nature"}>#nature</MenuItem>
          <MenuItem value={"IT"}>#IT</MenuItem>
          <MenuItem value={"history"}>#history</MenuItem>
          <MenuItem value={"general"}>#general</MenuItem>
        </Select>
        <FormHelperText>Choose post category</FormHelperText>
      </FormControl>
    </div>
  );
}
