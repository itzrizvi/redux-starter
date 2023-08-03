import { Container, Typography, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./redux/reducers/userReducer";

export const Home = () => {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "name", headerName: "Name", width: 230 },
    { field: "email", headerName: "Email", width: 230 },
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        const handleDelete = (id: string) => {
          dispatch(
            deleteUser({
              id,
            }),
          );
        };
        return (
          <div>
            <Link to={`/edit/${params.row.id}`}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "10px" }}
              >
                Edit
              </Button>
            </Link>
            <Button
              onClick={() => handleDelete(params.row.id)}
              variant="outlined"
              color="error"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Container>
        <Typography
          align="center"
          mt="40px"
          variant="h4"
          component="h3"
          fontWeight={700}
        >
          Crud App with JSON Server
        </Typography>
        <div
          style={{
            height: 400,
            width: "80%",
            margin: "auto",
          }}
        >
          <Link to="/create">
            <Button
              variant="contained"
              style={{ marginTop: "40px", marginBottom: "20px" }}
            >
              Create +
            </Button>
          </Link>

          <DataGrid
            rows={users}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </Container>
    </div>
  );
};
