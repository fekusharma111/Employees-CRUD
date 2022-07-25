import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({
  EmployeeName: String,
  Email: String,
  Phone: Number,
  Salary: Number,
});
const employeeSchema = mongoose.model("employeeSchema", EmployeeSchema);
export default employeeSchema;
