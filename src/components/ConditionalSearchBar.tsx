import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

function ConditionalSearchBar() {
  const location = useLocation();

  const enabledPaths = ["/"];

  const isSearchBarEnabled = enabledPaths.includes(location.pathname);

  return isSearchBarEnabled ? <SearchBar /> : null;
}

export default ConditionalSearchBar;
