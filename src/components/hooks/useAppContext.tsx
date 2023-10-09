import { useContext } from "react";
import { AppContext } from "../../state/context";

export const useAppContext = () => useContext(AppContext);
