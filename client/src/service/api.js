import axios from "axios";

const URL = "http://localhost:3001";

export const addEmployee = async (data) => {
  try {
    await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log(`Error occur while Adding Employee details ${error}`);
  }
};
export const getEmployee = async (setEmployee) => {
  try {
    await axios.get(`${URL}/all`).then((res) => {
      // alert(res.data.message);
      setEmployee(res.data);
      // console.log(setEmployee);
    });
  } catch (error) {
    console.log(`Error occur while Getting Employee details ${error}`);
  }
};
export const getEmployees = async (id, setEmployee) => {
  try {
    await axios.get(`${URL}/${id}`).then((res) => {
      setEmployee(res.data);
    });
  } catch (error) {
    console.log(
      `Error occur while getting the Editing Employee details ${error}`
    );
  }
};
export const editEmployee = async (id, Employee) => {
  try {
    await axios.post(`${URL}/${id}`, Employee);
  } catch (error) {
    console.log(`Error occur while  Editing Employee details ${error}`);
  }
};
export const deleteEmployee = async (id) => {
  try {
    if (window.confirm("Employee details will be delete permanently")) {
      return await axios.delete(`${URL}/${id}`).then((res) => {
        alert(res.data.message);
      });
    }
    // alert(res.data.message);
  } catch (error) {
    // alert(res.data.message);
    console.log(`Error occur while Deleting Employee details ${error}`);
  }
};
