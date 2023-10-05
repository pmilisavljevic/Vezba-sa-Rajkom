import MainLayout from "../components/layouts/MainLayout";
import { useState } from "react";
import { registerUser } from "../services/client";
import { useNavigate } from "react-router-dom";
import MuiButton from "../components/inputs/Button";
import { Container, Box, Typography } from "@mui/material";
import MuiTextInput from "../components/inputs/MuiTextInput";
import { AxiosError } from "axios";

const RegisterPage = () => {
  const [formState, setFormState] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const registerUserFunction = async () => {
    try {
      await registerUser(formState);
    } catch (err) {
      console.log(AxiosError);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    registerUserFunction();
    navigate("/LoginPage");
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setFormState({
      ...formState,
      [name]: e.target.value,
    });
  };

  return (
    <MainLayout>
      <div>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              mt: 4,
              mb: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: 1,
                // mb: 2,
                gap: 1,
              }}
            >
              <MuiTextInput
                label="User Name"
                value={formState.userName}
                name="userName"
                onChange={handleOnChange}
              />
              <MuiTextInput
                label="First Name"
                value={formState.firstName}
                name="firstName"
                onChange={handleOnChange}
              />
              <MuiTextInput
                label="Last Name"
                value={formState.lastName}
                name="lastName"
                onChange={handleOnChange}
              />
              <MuiTextInput
                label="Password"
                value={formState.password}
                name="password"
                onChange={handleOnChange}
                type="password"
              />
              <MuiTextInput
                label="Email"
                value={formState.email}
                name="email"
                onChange={handleOnChange}
                type="email"
              />
            </Box>
            <MuiButton size="large">SUBMIT</MuiButton>
          </Box>
        </Container>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;

// staviti height
