import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  InputAdornment,
  Button,
  styled,
} from "@mui/material";
import { getEmployees, editEmployee } from "../service/api";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 40px;
  }
`;

const EditEmployee = () => {
  const defaultValue = {
    EmployeeName: "",
    Email: "",
    Phone: 0,
    Salary: 0,
  };
  const [Employee, setEmployee] = useState(defaultValue);
  const { id } = useParams();
  // console.log(id);
  const loadEmployeeDetails = async () => {
    await getEmployees(id, setEmployee);
  };
  useEffect(() => {
    loadEmployeeDetails();
  }, []);
  const onValueChange = (e) => {
    setEmployee({ ...Employee, [e.target.name]: e.target.value });
    console.log(Employee);
  };
  const navigate = useNavigate();
  const EditEmployeeDetails = async () => {
    const { EmployeeName, Email, Phone, Salary } = Employee;
    if (EmployeeName && Email && Phone && Salary) {
      await editEmployee(id, Employee);
      alert(`${Employee.EmployeeName}'s details updated Successfully!!`);
      navigate("/all");
    } else {
      alert("Please Fill the data Perfectly!!!");
    }
  };
  return (
    <Container>
      <Typography variant="h4">Edit Employee Details</Typography>
      <FormControl>
        <InputLabel>Employee Name</InputLabel>
        <Input
          name="EmployeeName"
          value={Employee.EmployeeName}
          onChange={(e) => {
            onValueChange(e);
          }}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email id</InputLabel>
        <Input
          name="Email"
          onChange={(e) => {
            onValueChange(e);
          }}
          value={Employee.Email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          name="Phone"
          type="number"
          onChange={(e) => {
            onValueChange(e);
          }}
          value={Employee.Phone}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Salary</InputLabel>
        <Input
          name="Salary"
          type="number"
          startAdornment={<InputAdornment position="start">₹</InputAdornment>}
          onChange={(e) => {
            onValueChange(e);
          }}
          value={Employee.Salary}
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          onClick={() => {
            EditEmployeeDetails();
          }}
        >
          Update Employee Details
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditEmployee;
