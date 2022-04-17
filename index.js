const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const createFile = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-site')

// Code to use inquirer to gather information about the development team members,
// and to create objects for each team member.
const teamMembers = [];

function start() {
  addManager();
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team manager?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager office number?",
      },
    ])
    .then((val) => {
      const manager = new Manager(val.name, val.id, val.email, val.officeNumber);
      teamMembers.push(manager);
      addTeamMember();
    });
}


function engineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "Engineer ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Engineer email address:",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub Username?",
      },
    ])
    .then((val) => {
      const engineer = new Engineer(val.name, val.id, val.email, val.github);
      teamMembers.push(engineer);
      addTeamMember();
    });
}

function internInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "Intern ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Intern email address:",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
      },
    ])
    .then((val) => {
      const intern = new Intern(val.name, val.id, val.email, val.school);
      teamMembers.push(intern);
      addTeamMember();
    });
}

function addTeamMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "what_type",
          message: "What kind of employee you would like to add now?",
          choices: ["Engineer", "Intern", "Not at this time"],
        },
      ])
      .then((val) => {
        if (val.what_type === "Engineer") {
          engineerInfo();
        } else if (val.what_type === "Intern") {
          internInfo();
        } else {
            //console.log(teamMembers)
           const generatePage = createFile(teamMembers);
           writeFile(generatePage)
             copyFile();
            console.log("Your HTML webpage has been generated. Check the 'dist' folder.")
        }
      });
  }
  
// const createFile = teamMembers => {
//  return `
//  hola ${teamMembers
//     .filter(({Manager})=>Manager)
//     .map(({name,id,email,title,officeNumber}) => {
//         return `${name}
//         ${id}${email}${title}${officeNumber}
//        `
//     }
//     ) 
//  }`
// }
// const printIt = function (){
//     console.log(createFile)
// }

start();