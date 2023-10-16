import MainLayout from "../../layouts/MainLayout/MainLayout";
import { useState } from "react";
import Button from "../../components/inputs/Button";
import { AxiosError } from "axios";
import { fetchUsers } from "../../services/client";
import MuiTextInput from "../../components/inputs/MuiTextInput";
import { Container, Box, Typography } from "@mui/material";
import { LocalStorageKeys } from "../../helpers/constantsAndEnums";
import { useAppContext } from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

type User = {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  image: string;
  id: number;
};

const LoginPage = () => {
  const { dispatch, userActions } = useAppContext();
  // const { userSlice } = state;
  // console.log(userSlice.user);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };
  const handlePassOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPass(e.target.value);
  };

  const setMyUser = (foundUser: User) => {
    localStorage.setItem(LocalStorageKeys.user, JSON.stringify(foundUser));

    dispatch({
      type: userActions.LOGIN_USER,
      payload: foundUser,
    });
  };

  const navigate = useNavigate();

  const logInUser = async () => {
    setIsLoading(true);

    try {
      const response = await fetchUsers();

      const users = response.data;
      const user = users.find(
        (u: User) => u.email === email && u.password === pass
      );
      if (user) {
        setMyUser(user);
        navigate("/");
      } else {
        alert("User not found");
      }
    } catch (err) {
      console.error(AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logInUser();
  };

  return (
    <MainLayout>
      <div>{isLoading && <h2>Loading...</h2>}</div>
      <Container component="main" maxWidth="xs">
        {/* {Error && <h3>{}</h3>} */}
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 1,
              mb: 2,
              gap: 1,
            }}
          >
            <MuiTextInput
              label="Email"
              value={email}
              name="email"
              onChange={handleEmailOnChange}
              type="email"
            />
            <MuiTextInput
              label="Password"
              value={pass}
              name="password"
              onChange={handlePassOnChange}
              type="password"
            />
            <Button size="large">SUBMIT</Button>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default LoginPage;

// prebaciti find users u posebnu komponentu(hekpers0)
