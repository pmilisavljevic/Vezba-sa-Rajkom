import {
  PropsWithChildren,
  createContext,
  useReducer,
  useContext,
} from "react";
import { LocalStorageKeys, User } from "../helpers/constansAndEnums";

const userActions = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
  // odvojiti u poseban file
};

type UserActionType = {
  type: string;
  payload?: User; // Modify this to match your action payload
};

// Define your user reducer
const userReducer = (
  state: UserSliceType,
  action: UserActionType
) => {
  switch (action.type) {
    case userActions.LOGIN_USER:
      return {
        ...state,
        user: action.payload
      }; // Set the user when logged in
    case userActions.LOGOUT_USER:
      return {
        ...state,
        user:null
      }; // Clear the user when logged out
    // Handle other user-related actions here
    default:
      return state;
  }
};

// Define your initial state
//Rename to initial state type
type UserSliceType = {
  user: User | null | undefined;
}

type InitialStateType = {
  userSlice: UserSliceType
};


const initialState: InitialStateType = {
  userSlice: {
    user:localStorage.getItem(LocalStorageKeys.user)
    ? (JSON.parse(localStorage.getItem(LocalStorageKeys.user) || "") as User)
    : null,
  }
};

// Create the context
const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<UserActionType>; // Specify the action type
  userActions: typeof userActions;
}>({
  state: initialState,
  dispatch: () => null,
  userActions,
});

// Create a custom hook for using the context
export const useAppContext = () => useContext(AppContext);

const mainReducer = (
  state: InitialStateType,
  action: UserActionType
): InitialStateType => {
  return {
    ...state,
    userSlice: userReducer(state.userSlice, action),
  };
};

const ContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  console.log(state);
  
  return (
    <AppContext.Provider value={{ state, dispatch, userActions }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
