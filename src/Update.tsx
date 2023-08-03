import { Box, Button, Container, TextField, Typography } from "@mui/material";

export const Update = () => {
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
