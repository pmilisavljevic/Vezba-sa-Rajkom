import { PropsWithChildren } from "react";
import PageNav from "./components/PageNav";
import Footer from "./components/Footer";

type Props = PropsWithChildren;

function MainLayout({ children }: Props) {
  return (
    <div className="main_layout">
      <PageNav />
      <div className="flex-grow layout-container">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
