import { PropsWithChildren } from "react";

// type Props = {
//   children:ReactNode | ReactNode[]
// }

type Props = {
  onClick?: () => null;
} & PropsWithChildren;

// interface Props2 extends PropsWithChildren {
//   onClick: () => null;
// }

const Button = ({ children, onClick = ()=>null }: Props) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
