const Engineer = require('../lib/Engineer');



test("gettitle should return Engineer", () => {
  const testThis = "Engineer";
  const engineer = new Engineer('Edgar', 1, "esgarsad.com", "GitHubUser");
  expect(engineer.getTitle()).toBe(testThis);
});

test("getName should return Edgar", () => {
  const engineer = new Engineer('Edgar', 1, "esgarsad.com", "GitHubUser");
  expect(engineer.getName()).toBe('Edgar');
});

test("get GitHub username with getGithub()", () => {
  const engineer = new Engineer('Edgar', 1, "esgarsad.com", "GitHubUser");
  expect(engineer.getGitHub()).toBe("GitHubUser");
});