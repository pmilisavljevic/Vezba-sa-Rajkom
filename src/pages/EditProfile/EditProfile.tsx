import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MuiButton from "../../components/inputs/MuiButton";
import MuiTextInput from "../../components/inputs/MuiTextInput";

import { LocalStorageKeys } from "../../helpers/constantsAndEnums";

import { Container, Box, Typography } from "@mui/material";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

function EditProfile() {
  const localUser = JSON.parse(
    localStorage.getItem(LocalStorageKeys.user) || ""
  );
  // console.log(localUser);

  type UpdateProfilePayload = {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    password?: string;
  };
  const [password, setPassword] = useState("");
  const [profileUpdate, setProfileUpdate] = useState<UpdateProfilePayload>({
    userName: localUser?.userName || "",
    firstName: localUser?.firstName || "",
    lastName: localUser?.lastName || "",
    email: localUser?.email || "",
    id: localUser?.id,
  });

  // console.log(profileUpdate);
  const profileUpdateFunction = async () => {
    try {
      const payload = { ...profileUpdate };
      if (password) {
        payload.password = password;
      }

      await axios.patch(
        `http://localhost:3000/users/${localUser?.id}`,
        payload
      );
      toast.success("Edit successful");
    } catch (err) {
      console.log(AxiosError);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    profileUpdateFunction();
    navigate("/");
    // alert("test");
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setProfileUpdate({
      ...profileUpdate,
      [name]: e.target.value,
    });
    // console.log(formState);
  };

  return (
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
            Profile
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
              value={profileUpdate.userName}
              name="userName"
              onChange={handleOnChange}
            />
            <MuiTextInput
              label="First Name"
              value={profileUpdate.firstName}
              name="firstName"
              onChange={handleOnChange}
            />
            <MuiTextInput
              label="Last Name"
              value={profileUpdate.lastName}
              name="lastName"
              onChange={handleOnChange}
            />

            <MuiTextInput
              label="Email"
              value={profileUpdate.email}
              name="email"
              onChange={handleOnChange}
              type="email"
            />
            <MuiTextInput
              label="Pasword"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required={false}
            />
            <MuiButton size="large">SUBMIT</MuiButton>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default EditProfile;
