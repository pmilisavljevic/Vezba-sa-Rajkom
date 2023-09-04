import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const LinkItem = ({ children }: Props) => {
  return <div className="nav-btn">{children}</div>;
};

export default LinkItem;
