import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import MuiTextInput from "../../components/inputs/MuiTextInput";
import CategorySelector from "../NewPost/CategorySelector";
import Button from "../../components/inputs/MuiButton";

import { useAppContext } from "../../hooks/useAppContext";

import { Box, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

function EditPost() {
  const {
    state: {
      postsSlice: { posts },
    },
  } = useAppContext();
  const { id } = useParams();
  const postForEdit = posts.find((post) => post.id === Number(id));

  type EditedPostPayload = {
    title: string;
    body: string;
  };

  const [editedPost, setEditedPost] = useState<EditedPostPayload>({
    title: postForEdit?.title || "",
    body: postForEdit?.body || "",
  });
  console.log(editedPost);

  function handleOnChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const name = e.target.name;
    setEditedPost({
      ...editedPost,
      [name]: e.target.value,
    });
  }

  const editPostFunction = async () => {
    try {
      await axios.patch(`http://localhost:3000/posts/${id}`, editedPost);
      toast.success("Edit successful");
    } catch (err) {
      toast.error("There was some error");
      console.log(err);
    }
  };

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    editPostFunction();
    navigate(`/post/${id}`);
  }

  return (
    <>
      {postForEdit && (
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
              Edit Post
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
                value={editedPost.title}
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
                value={editedPost.body}
                onChange={handleOnChange}
              />
              <CategorySelector
                disabled={true}
                category={postForEdit.category}
                //   onChange={handleOnChange}
              />
              <Button size="large">SUBMIT</Button>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}
export default EditPost;
