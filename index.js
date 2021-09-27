const fs = require("fs");
const inquirer = require("inquirer");

//Prompt the user questions to populate the README.md
inquirer
    .prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the Projects Title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your Project: "
        },
        {
            type: "input",
            name: "install",
            message: "Describe the Installation process if any: ",
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
                "None",
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
            message: "Who contributed to this project?"
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
        const readMe =  `
        #${answers.projectTitle}
  
        ![badge](https://img.shields.io/badge/license-${answers.license}-blue)

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

            This application is covered by the ${answers.license} license.

        ## Contributing
            ${answers.contributors}

        ## Tests
            ${answers.tests}

        # Questions
            ${answers.questions}

            My GitHub: [${answers.username}](https://github.com/${answers.username})

            Send any questions to: ${answers.email}`

        fs.writeFile('dist/README.md', readMe, (error) => {console.log(error)});    
    })
