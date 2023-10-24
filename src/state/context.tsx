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

type UserSliceType = {
  user: User | null | undefined;
};

export type PostType = {
  img: string;
  title: string;
  body: string;
  userName: string;
  date: string;
  id: number;
};
type PostsSliceType = {
  posts: PostType[];
};
// Initial state
type InitialStateType = {
  userSlice: UserSliceType;
  postsSlice: PostsSliceType;
};

const initialState: InitialStateType = {
  userSlice: {
    user: localStorage.getItem(LocalStorageKeys.user)
        ? (JSON.parse(localStorage.getItem(LocalStorageKeys.user) || "") as User)
        : null,
  },
  postsSlice: {
    posts: [],
  },
};
type UserActionType = {
  type: string;
  payload: User | null;
};
type PostsActionType = {
  type: string;
  payload: PostType[] ;
};

type GeneralActionType = UserActionType | PostsActionType;

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

const postsReducer = (state: PostsSliceType, action: PostsActionType) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<UserActionType|PostsActionType>   ; // Specify the action type
  userActions: typeof userActions;
}>({
  state: initialState,
  dispatch: () => null,
  userActions,
});

const mainReducer = (state: InitialStateType, action: GeneralActionType): InitialStateType => {
  //READ
  //here we user two helper functions to checks for what kind of an action we are dispatching
  // does that application fall in the user action types or post action types
  if (isUserAction(action)) {
    return {
      ...state,
      userSlice: userReducer(state.userSlice, action),
    };
  }

  if (isPostsAction(action)) {
    return {
      ...state,
      postsSlice: postsReducer(state.postsSlice, action),
    };
  }

  return state;
};
//READ
// These two functions check of what type is the user action being dispatched as in
// do they fall in the category of user actions or posts actions
function isUserAction(action: GeneralActionType): action is UserActionType {
  return (action as UserActionType).type in userActions;
}

function isPostsAction(action: GeneralActionType): action is PostsActionType {
  // make an array with posts actions as with userActions above
  return (action as PostsActionType).type === "GET_ALL_POSTS"; // Adjust as needed
}

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
