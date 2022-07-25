import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { getEmployee, deleteEmployee } from "../service/api";
// import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import { TableBody } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const AllEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    getAllEmployee();
    // console.log(setEmployee);
  }, []);
  const getAllEmployee = async () => {
    await getEmployee(setEmployee);
    // console.log(Response.data);
    // console.log(employee);
  };
  const handleEditClick = (id) => {
    // console.log(id);
    navigate(`/edit/${id}`);
  };
  const handleDeleteClick = async (id) => {
    // navigate("/all");
    // console.log(`handle Delete click ${id}`);

    await deleteEmployee(id);
    getAllEmployee();
    // navigate("/all");
  };
  const columns = [
    {
      field: "EmployeeName",
      headerName: "Employee Name",
      width: 300,
      editable: true,
    },
    { field: "Email", headerName: "Email Id", width: 300 },
    {
      field: "Phone",
      headerName: "Phone",
      // type: "number",
      width: 100,
      inputMode: "numeric",
    },
    {
      field: "Salary",
      headerName: "Salary",
      type: "number",
      width: 100,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => {
              handleEditClick(id);
            }}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            className="textPrimary"
            onClick={() => {
              handleDeleteClick(id);
            }}
            color="inherit"
          />,
        ];
      },
    },
  ];

  // const rows = useMemo(() =>
  //   employee.map((employee, key) => {
  //     <DataGrid
  //     />
  //   })
  // );
  for (const row of employee) {
    row.id = row._id;
  }

  return (
    <Box sx={{ height: 400, mx: "auto", my: 15, width: "60%" }}>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        All Employee Details
      </Typography>
      <DataGrid
        editMode="row"
        rows={employee}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[1, 10]}
        checkboxSelection
        autoHeight={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default AllEmployee;
