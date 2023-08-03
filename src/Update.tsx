import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState, User } from "./redux/reducers/Data";
import { updateUser } from "./redux/reducers/userReducer";

export const Update = () => {
  const { id } = useParams();
  const users = useSelector((state: RootState) => state.users);
  const existingUser = users.find((user: User) => user.id === id);
  const name = existingUser?.name ?? "";
  const email = existingUser?.email ?? "";
  const [userName, setUserName] = useState<string>(name);
  const [userEmail, setUserEmail] = useState<string>(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id,
        name: userName,
        email: userEmail,
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
        Update Entry
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
            defaultValue={userName}
            fullWidth
            onChange={(e) => setUserName(e.target.value)}
            style={{
              marginBottom: "30px",
            }}
          />
          <TextField
            id="outlined-disabled"
            label="Email"
            type="email"
            name="email"
            defaultValue={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Update
          </Button>
        </div>
      </Box>
    </Container>
  );
};
