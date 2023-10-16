import {
  PropsWithChildren,
  createContext,
  useReducer,
  // useContext,
} from "react";
import {
  LocalStorageKeys,
  User,
  userActions,
} from "../helpers/constantsAndEnums";

// Initial state
type UserSliceType = {
  user: User | null | undefined;
};

type InitialStateType = {
  userSlice: UserSliceType;
};

const initialState: InitialStateType = {
  userSlice: {
    user: localStorage.getItem(LocalStorageKeys.user)
      ? (JSON.parse(localStorage.getItem(LocalStorageKeys.user) || "") as User)
      : null,
  },
};
type UserActionType = {
  type: string;
  payload?: User;
};

//user reducer
const userReducer = (state: UserSliceType, action: UserActionType) => {
  switch (action.type) {
    case userActions.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      }; // Set the user when logged in
    case userActions.LOGOUT_USER:
      return {
        ...state,
        user: null,
      }; // Clear the user when logged out
    //
    default:
      return state;
  }
};

// Create context
const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<UserActionType>; // Specify the action type
  userActions: typeof userActions;
}>({
  state: initialState,
  dispatch: () => null,
  userActions,
});

const mainReducer = (
  state: InitialStateType,
  action: UserActionType
): InitialStateType => {
  return {
    ...state,
    userSlice: userReducer(state.userSlice, action),
  };
};

// Context provider
const ContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  // console.log(state.userSlice.user);

  return (
    <AppContext.Provider value={{ state, dispatch, userActions }}>
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider, AppContext };
