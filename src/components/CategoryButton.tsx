import { PropsWithChildren } from "react";
import { catColors } from "../helpers/constantsAndEnums";

type Props = {
  handleClicked: () => void;
  background: string;
  active: boolean;
} & PropsWithChildren;

function CategoryButton({
  children,
  background,
  handleClicked,
  active,
}: Props) {
  return (
    <button
      style={{ backgroundColor: catColors[background] }}
      className={`categories-filter__button ${active ? "active" : ""} `}
      onClick={handleClicked}
    >
      {children}
    </button>
  );
}

export default CategoryButton;
