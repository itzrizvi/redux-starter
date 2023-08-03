import { Container, Typography, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "name", headerName: "Name", width: 230 },
  { field: "email", headerName: "Email", width: 230 },
  {
    field: "action",
    headerName: "Action",
    width: 230,
    renderCell: (params) => {
      const handleEdit = () => {
        // Implement your edit logic here
        console.log("Edit button clicked for row:", params.row.id);
      };

      const handleDelete = () => {
        // Implement your delete logic here
        console.log("Delete button clicked for row:", params.row.id);
      };
      return (
        <div>
          <Link to={`/edit/${params.row.id}`}>
            <Button
              onClick={handleEdit}
              variant="outlined"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Edit
            </Button>
          </Link>
          <Button onClick={handleDelete} variant="outlined" color="error">
            Delete
          </Button>
        </div>
      );
    },
  },
];

export const Home = () => {
  const users = useSelector((state: any) => state.users);
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
