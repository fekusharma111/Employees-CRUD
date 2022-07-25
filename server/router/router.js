import express from "express";
import {
  addEmployee,
  getEmployee,
  getEmployees,
  editEmployee,
  deleteEmployee,
} from "../controller/controller.js";

const router = express.Router();

router.post("/add", addEmployee);
router.get("/all", getEmployee);
router.get("/:id", getEmployees);
router.post("/:id", editEmployee);
router.delete("/:id", deleteEmployee);

export default router;
