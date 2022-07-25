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
import { addEmployee } from "../service/api";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 40px;
  }
`;

const AddEmployee = () => {
  const defaultValue = {
    EmployeeName: "",
    Email: "",
    Phone: 0,
    Salary: 0,
  };
  const [Employee, setEmployee] = useState(defaultValue);
  const onValueChange = (e) => {
    setEmployee({ ...Employee, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const AddEmployeeDetails = async () => {
    const { EmployeeName, Email, Phone, Salary } = Employee;
    if (EmployeeName && Email && Phone && Salary) {
      await addEmployee(Employee);
      console.log(Employee.EmployeeName);
      alert(`${Employee.EmployeeName} is added to Employee list`);
      navigate("/all");
    } else {
      alert("Please Fill the data Perfectly!!!");
    }
  };
  return (
    <Container>
      <Typography variant="h4">Add Employee Details</Typography>
      <FormControl>
        <InputLabel>Employee Name</InputLabel>
        <Input
          name="EmployeeName"
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
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          onClick={() => {
            AddEmployeeDetails();
          }}
        >
          Add Employee
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddEmployee;
