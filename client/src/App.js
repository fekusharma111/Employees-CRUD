import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AllEmployee from "./component/AllEmployee";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";
import EmployeesRecord from "./component/EmployeeRecord";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeesRecord />} />
        <Route path="/all" element={<AllEmployee />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
