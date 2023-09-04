import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import LinkItem from "./inputs/LinkItem";

export default function PageNav() {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-list">
        <li>
          <LinkItem>
            <NavLink to="/RegisterPage">Regiser</NavLink>
          </LinkItem>
        </li>
        <li>
          <LinkItem>
            <NavLink to="/LoginPage">Login</NavLink>
          </LinkItem>
        </li>
        <li>
          <LinkItem>
            <NavLink to="/RegisterPage">Placeholder...</NavLink>
          </LinkItem>
        </li>
      </ul>
    </nav>
  );
}
