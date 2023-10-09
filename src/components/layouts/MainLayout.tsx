import { PropsWithChildren } from "react";
import PageNav from "../PageNav";
import Footer from "../Footer";

type Props = PropsWithChildren;

const MainLayout = ({ children }: Props) => {
  return (
    <div className="main_layout">
      <PageNav />
      <div className="flex-grow layout-container">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
