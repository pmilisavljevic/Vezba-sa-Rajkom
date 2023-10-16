import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { registerUser } from "../../services/client";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  userName: yup.string().required("Username is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Formik() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //
      const registerUserFunction = async () => {
        try {
          await registerUser(values);
        } catch (err) {
          console.log(err);
        }
      };
      registerUserFunction();
      navigate("/LoginPage");
    },
  });

  return (
    <MainLayout>
      <div>
        <Container component="main" maxWidth="lg">
          <Box
            sx={{
              mt: 5,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Register
            </Typography>

            {/* <form onSubmit={formik.handleSubmit}> */}

            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                width: 400,
                mt: 5,
                mb: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                id="userName"
                name="userName"
                label="Username"
                type="string"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
              />
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Box>
            {/* </form> */}
          </Box>
        </Container>
      </div>
    </MainLayout>
  );
}

export default Formik;
