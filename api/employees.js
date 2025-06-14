import express from "express";
import { getEmployees, getEmployeebyId, addEmployee } from "../db/employees.js";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    const employees = getEmployees();
    res.send(employees);
  })
  .post((req, res) => {
    if (
      !req.body ||
      typeof req.body !== "object" ||
      Object.keys(req.body).length === 0
    ) {
      return res.status(400).send("Request must have a body.");
    }

    if (typeof req.body.name !== "string" || req.body.name.trim() === "") {
      return res.status(400).send("New employee must have a name.");
    }

    const { name } = req.body;
    const newEmployee = addEmployee(name);
    res.status(201).send(newEmployee);
  });

router.route("/random").get((req, res) => {
  const allEmployees = getEmployees();
  if (allEmployees.length === 0) {
    return res.status(404).send("Employee not found.");
  }

  const randomIndex = Math.floor(Math.random() * allEmployees.length);
  res.status(200).send(allEmployees[randomIndex]);
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;

  if (!/^\d+$/.test(id)) {
    return res.status(400).send({ error: "ID must be a number." });
  }

  const employeeId = parseInt(id, 10);
  const employee = getEmployeebyId(employeeId);

  if (!employee) {
    return res.status(404).send("Employee not found.");
  }

  res.send(employee);
});

export default router;
