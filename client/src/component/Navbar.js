import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  //   background: #111111;
  position: sticky;
`;
const Tab = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  return (
    // <h1>Hii</h1>
    <Header>
      <Toolbar>
        <Tab to={"./"}>Employee's Record</Tab>
        <Tab to={"./all"}>All Employee</Tab>
        <Tab to={"./add"}>Add Employee</Tab>
        {/* <Tab to={"./edit"}>Edit Employee</Tab> */}
        {/* <Tab to={"./delete"}>Delete Employee</Tab> */}
      </Toolbar>
    </Header>
  );
};

export default Navbar;
