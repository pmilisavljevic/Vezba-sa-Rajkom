import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import LinkItem from "../../../components/inputs/LinkItem";
import { useAppContext } from "../../../hooks/useAppContext";

import AccountMenu from "./AccountMenu";

function PageNav() {
  const { state } = useAppContext();
  const user = state.userSlice.user;

  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-list">
        {user ? (
          <>
            <AccountMenu />
          </>
        ) : (
          <>
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
                <NavLink to="/">Placeholder...</NavLink>
              </LinkItem>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default PageNav;
