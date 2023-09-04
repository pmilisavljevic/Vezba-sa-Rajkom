import Aside from "../components/Aside";
import PageNav from "../components/PageNav";
import Section from "../components/Section";

export default function Homepage() {
  return (
    <>
      <div className="main">
        <PageNav />
        <div className=" container main-grid">
          <Aside />
          <Section />
        </div>
      </div>
      <footer>FOOTER</footer>
    </>
  );
}
