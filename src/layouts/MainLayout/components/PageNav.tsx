import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import LinkItem from "../../../components/inputs/LinkItem";
import AccountMenu from "./AccountMenu";
// import SearchBar from "../../../components/SearchBar";
import ConditionalSearchBar from "../../../components/ConditionalSearchBar";

import { useAppContext } from "../../../hooks/useAppContext";

function PageNav() {
  const { state } = useAppContext();
  const user = state.userSlice.user;

  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-list">
        <ConditionalSearchBar />
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
