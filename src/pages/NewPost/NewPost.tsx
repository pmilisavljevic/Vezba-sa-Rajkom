// import MainLayout from "../components/layouts/MainLayout";
import Button from "../../components/inputs/Button";
import { Box, Container, TextField, Typography } from "@mui/material";
import MuiTextInput from "../../components/inputs/MuiTextInput";
import { useAppContext } from "../../hooks/useAppContext";
import { useState } from "react";
import { createNewPost } from "../../services/client";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { useNavigate } from "react-router-dom";
import { getFormattedDate } from "../../utils/dataFormat";
import CategorySelector from "./CategorySelector";
import { SelectChangeEvent } from "@mui/material/Select";

function NewPost() {
  const {
    state: {
      userSlice: { user },
    },
  } = useAppContext();
  // console.log(user);

  const randomNumber = Math.floor(Math.random() * 200) + 1;

  const [newPost, setNewPost] = useState({
    img: `https://picsum.photos/1000/200?random=${randomNumber}`,
    title: "",
    body: "",
    userName: user?.userName,
    date: getFormattedDate(),
    category: "general",
  });
  // console.log(newPost);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
    console.log(newPost);
  };

  const navigate = useNavigate();

  const newPostFunction = async () => {
    try {
      await createNewPost(newPost);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    newPostFunction();
    navigate("/MyPosts");
  };

  return (
    <MainLayout>
      <Container component="main">
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
            Create Post
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
              label="Title"
              value={newPost.title}
              onChange={handleOnChange}
              type="text"
              name="title"
            />
            <TextField
              id="outlined-multiline-static"
              label="Body"
              name="body"
              multiline
              rows={10}
              fullWidth
              value={newPost.body}
              onChange={handleOnChange}
            />
            <CategorySelector
              category={newPost.category}
              onChange={handleOnChange}
            />
            <Button size="large">SUBMIT</Button>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default NewPost;
