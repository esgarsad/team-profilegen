const Employee = require("../lib/Employee");

test("Create an employee object", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("Can get name via getName()", () => {
  const employee = new Employee('Edgar', 1, "esgarsad.com");
  expect(employee.getName()).toBe('Edgar');
});

test("Can get id via getId()", () => {
  const employee = new Employee('Edgar', 1, "esgarsad.com");
  expect(employee.getId()).toBe(1);
});

test("Can get email via getEmail()", () => {
  const employee = new Employee('Edgar', 1, "esgarsad.com");
  expect(employee.getEmail()).toBe("esgarsad.com");
});

test("gettitle returns employee", () => {
  const testValue = "Employee";
  const employee = new Employee('Edgar', 1, "esgarsad.com");
  expect(employee.getTitle()).toBe(testValue);
});