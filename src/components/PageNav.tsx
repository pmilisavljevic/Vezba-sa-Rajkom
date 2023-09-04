import Logo from "./Logo";
import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-list">
        <li>
          <NavLink to="/TestPage">TESTPAGE</NavLink>
        </li>
        <li>
          <NavLink to="/TestPage">TESTPAGE</NavLink>
        </li>
        <li>
          <NavLink to="/TestPage">TESTPAGE</NavLink>
        </li>
      </ul>
    </nav>
  );
}
