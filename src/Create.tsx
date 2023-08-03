import React, { useState } from "react";
import { Box, TextField, Container, Button, Typography } from "@mui/material";
import { addUser } from "./redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: `${parseInt(users[users.length - 1].id) + 1}`,
        name,
        email,
      }),
    );
    navigate("/");
  };

  return (
    <Container>
      <Typography
        align="center"
        mt="40px"
        variant="h4"
        component="h3"
        fontWeight={700}
      >
        Create Entry
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        p={10}
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <div>
          <TextField
            id="outlined-required"
            label="Name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            fullWidth
            style={{
              marginBottom: "30px",
            }}
          />
          <TextField
            id="outlined-disabled"
            label="Email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Submit
          </Button>
        </div>
      </Box>
    </Container>
  );
};
