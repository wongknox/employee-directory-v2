const initialEmployeesData = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

let employees = [...initialEmployeesData];

export default employees;

export function getEmployees() {
  return employees;
}

export function getEmployeebyId(id) {
  return employees.find((employee) => employee.id === id);
}

export function addEmployee(name) {
  const lastEmployeeId =
    employees.length > 0
      ? Math.max(...employees.map((employee) => employee.id))
      : 0;

  const newId = lastEmployeeId + 1;

  const newEmployee = {
    id: newId,
    name: name,
  };

  employees.push(newEmployee);

  return newEmployee;
}
