import { NavLink } from "react-router-dom";
import { LocalStorageKeys } from "../../../helpers/constantsAndEnums";

type Props = {
  userName: string;
  date: string;
  title: string;
  body: string;
  id: number;
};

function PostComponent({ userName, date, title, body, id }: Props) {
  const currentUser = JSON.parse(
    localStorage.getItem(LocalStorageKeys.user) || ""
  );
  return (
    <>
      <div className="post-component">
        <p>By {userName}</p>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        {userName === currentUser.userName ? (
          <NavLink className="post-component__button" to={`/editpost/${id}`}>
            EDIT POST
          </NavLink>
        ) : null}
      </div>
    </>
  );
}

export default PostComponent;
