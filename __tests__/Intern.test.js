const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const intern = new Intern('Edgar', 1, "esgarsad.com", "MTSU");
  expect(intern.name).toBe('Edgar');
});

test("should return Intern", () => {
  const testValue = "Intern";
  const intern = new Intern('Edgar', 1, "esgarsad.com", "MTSU");
  expect(intern.getTitle()).toBe(testValue);
});

test("getSchool() returns school", () => {
  const intern = new Intern('Edgar', 1, "esgarsad.com", "MTSU");
  expect(intern.getSchool()).toBe("MTSU");
});