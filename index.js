const fs = require("fs");
const inquirer = require("inquirer");

//Prompt the user questions to populate the README.md
inquirer
    .prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the projects Title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "install",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "use",
            message: "What is the Projects Use?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ])
    .then((answers) => {
        console.log(answers)
        const readMe =  `
            <h1 align="center">${answers.projectTitle}</h1>
  
            ![badge](https://img.shields.io/badge/license-${answers.license}-blue)<br />
            ## Description
            ${answers.description}
            ## Table of Contents
            - [Description](#description)
            - [Installation](#installation)
            - [Usage](#usage)
            - [License](#license)
            - [Contributing](#contributing)
            - [Tests](#tests)
            - [Questions](#questions)
            ## Installation
            ${answers.installation}
            ## Usage
            ${answers.use}
            ## License
            ![badge](https://img.shields.io/badge/license-${answers.license}-blue)
            <br />
            This application is covered by the ${answers.license} license. 
            ## Contributing
            ${answers.contributors}
            ## Tests
            ${answers.tests}
            # Questions
            ${answers.questions}<br />
            <br />
            Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
            <br />
            Email me with any questions: ${answers.email}<br /><br />
            This README was generated with by [README-generator](https://github.com/kirkh43064/ReadMEGen)`
            fs.writeFile('dist/readMe.md', readMe, (error) => {console.log(error)});    
    })
