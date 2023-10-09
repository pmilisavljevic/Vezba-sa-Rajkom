import Logo from "./Logo";
import { NavLink, useNavigate } from "react-router-dom";
import LinkItem from "./inputs/LinkItem";
import { useAppContext } from "./hooks/useAppContext";
import { LocalStorageKeys } from "../helpers/constansAndEnums";

export default function PageNav() {
  const { state, dispatch, userActions } = useAppContext();
  const user = state.userSlice.user;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: userActions.LOGOUT_USER });
    localStorage.removeItem(LocalStorageKeys.user);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-list">
        {user ? (
          <>
            <li>
              <LinkItem>
                <NavLink to="Post">Create Post</NavLink>
              </LinkItem>
            </li>
            <li>
              <LinkItem>
                <NavLink to="EditProfile">Edit profile</NavLink>
              </LinkItem>
            </li>
            <li>
              <LinkItem>
                <a onClick={handleLogout}>LOG OUT</a>
              </LinkItem>
            </li>
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
                <NavLink to="/RegisterPage">Placeholder...</NavLink>
              </LinkItem>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
