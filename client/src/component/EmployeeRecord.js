import React from "react";
import { Button, styled, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyleDiv = styled(ButtonGroup)`
  
  margin:183px 30% 0% 30%;
  
  }
`;

const EmployeesRecord = () => {
  const navigate = useNavigate();
  const add = () => {
    navigate("/add");
  };
  const read = () => {
    navigate("/all");
  };
  const edit = () => {
    alert("Please Select one to edit the details ");
    navigate("/all");
  };
  const Delete = () => {
    navigate("/all");
    alert("Please Select one to delete the details ");
  };
  return (
    <StyleDiv variant="contained">
      <Button onClick={() => add()}>Create/Add Data</Button>
      <Button onClick={() => read()}>Read Data</Button>
      <Button onClick={() => edit()}>Edit/Update Data</Button>
      <Button onClick={() => Delete()}>Delete Data</Button>
    </StyleDiv>
  );
};

export default EmployeesRecord;
