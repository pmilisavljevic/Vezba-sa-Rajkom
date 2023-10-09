// import Section from "../components/Section";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../components/hooks/useAppContext";
import MainLayout from "../components/layouts/MainLayout";

export default function MainBlogPage() {
  const {
    state: {
      userSlice: { user },
    },
  } = useAppContext();
  //   console.log(user);

  return (
    <div>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  );
}
