import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

type Props = PropsWithChildren;

function ProtectedRoute({ children }: Props) {
  const {
    state: {
      userSlice: { user },
    },
  } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return children;
}

export default ProtectedRoute;
