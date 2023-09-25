import { PropsWithChildren } from "react";
import Button from "@mui/material/Button";

// type Props = {
//   children:ReactNode | ReactNode[]
// }

type Props = {
  size: "small" | "medium" | "large";
  onClick?: () => null;
} & PropsWithChildren;

// interface Props2 extends PropsWithChildren {
//   onClick: () => null;
// }

const MuiButton = ({ size, children, onClick = () => null }: Props) => {
  return (
    <Button
      sx={{
        mt: 2,
      }}
      type="submit"
      // className="btn"
      variant="outlined"
      fullWidth
      size={size}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </Button>
  );
};

export default MuiButton;
