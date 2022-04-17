const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number from the constructor", () => {
  const manager = new Manager('Edgar', 1, "esgarsad.com", 2);
  expect(manager.officeNumber).toBe(2);
});

test('getRole() returns Manager', () => {
  const manager = new Manager('Edgar', 1, "esgarsad.com", 2);
  expect(manager.getTitle()).toBe("Manager");
});

test("getOffice() returns office number", () => {
  const manager = new Manager('Edgar', 1, "esgarsad.com", 2);
  expect(manager.getOfficeNumber()).toBe(2);
});