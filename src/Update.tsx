import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, User } from "./redux/reducers/Data";

export const Update = () => {
  const { id } = useParams();
  const users = useSelector((state: RootState) => state.users);
  const existingUser = users.find((user: User) => user.id === id);
  const name = existingUser?.name ?? "";
  const email = existingUser?.email ?? "";
  const [userName, setUserName] = useState<string>(name);
  const [userEmail, setUserEmail] = useState<string>(email);
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
      <Box component="form" noValidate autoComplete="off" p={10}>
        <div>
          <TextField
            id="outlined-required"
            label="Name"
            name="name"
            type="text"
            defaultValue={userName}
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
            defaultValue={userEmail}
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
