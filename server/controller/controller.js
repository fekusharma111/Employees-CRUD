// import { Schema } from "mongoose";
import employeeSchema from "../models/EmployeeSchema.js";

export const addEmployee = async (req, res) => {
  try {
    const newEmployee = new employeeSchema(req.body);
    await newEmployee.save();
    res.status(201).json({ newEmployee });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
export const getEmployee = async (req, res) => {
  const allemployeedetails = await employeeSchema.find({});
  res.status(201).json(allemployeedetails);
};
export const getEmployees = async (req, res) => {
  // console.log(req.params.id);
  const oneemployeedetails = await employeeSchema.findById(req.params.id);
  res.status(200).json(oneemployeedetails);
};
export const editEmployee = async (req, res) => {
  try {
    const eeditEmployee = new employeeSchema(req.body);
    await employeeSchema.updateOne({ _id: req.params.id }, eeditEmployee);
    res.status(201).json(eeditEmployee);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const deleteEmployee = async (req, res) => {
  try {
    const oneemployeedetails = await employeeSchema.findById(req.params.id);
    console.log(oneemployeedetails.EmployeeName);
    await employeeSchema.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: `${oneemployeedetails.EmployeeName}'s details deleted successfully`,
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
