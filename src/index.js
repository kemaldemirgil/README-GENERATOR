const inquirer = require('inquirer');
const fs = require("fs");
let selectedLicense;

const generatedREADME = (response) => {
  return `
  ${selectedLicense}
  # ${response.title}

  ## 📖Description
  
  ---
  
  ${response.desc}

  ## 📜Table of Contents

  * [Description](#📖Description)
  * [Installation](#🔧Installation)
  * [Usage](#🚀Usage)
  * [Contributing](#🤝Contributing)
  * [Testing](#📊Testing)
  * [Questions](#❓Questions)
  * [License](#📝License)


  ## 🔧Installation
  ${response.install}

  ## 🚀Usage
  ${response.usage}

  ## 🤝Contributing
  ${response.contribute}

  ## 📊Testing
  ${response.test}

  ## ❓Questions
  > ${response.question}
  
  👤**${response.name}**

  - Email: ${response.email}
  - Github: [@${response.github}](https://github.com/${response.github})

  ## 📝License
  
  ---
  
  Copyright © ${response.name}. All rights reserved.\
  Licensed under the [${response.license}](https://github.com/${response.github}/${response.repo}/blob/main/LICENSE) license.
  
  `
}
console.log("\n---------------------> README GENERATOR <---------------------\n\n\nPlease enter all the following questions accordingly to generate your README to its best result!\n");
inquirer .prompt([
  {
    type: 'input',
    message: 'Please enter the your name...',
    name: 'name',
    validate: (value) => {if (value){return true} else {return "Please enter a valid name"}}
  },
  {
    type: 'input',
    message: 'Please enter the Title...',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter the Description...',
    name: 'desc',
  },
  {
    type: 'input',
    message: 'Please enter the Installation instructions...',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Please enter the Usage information...',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Please select the License...',
    name: 'license',
    choices: [
        "MIT",
        "GNU v3.0",
        "Apache 2.0",
        "Boost 1.0",
        "GNU Affero v3.0",
        "Mozilla 2.0",
        "The Unlicense"
    ]
  },
  {
    type: 'list',
    message: 'Please select the Color for the license badge...',
    name: 'color',
    choices: [
        "Cyan",
        "Yellow",
        "Red",
        "Green",
        "Purple",
        "Pink",
        "Orange"
    ]
  },
  {
    type: 'input',
    message: 'Please enter Contribution guideline...',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'Please enter Test instructions...',
    name: 'test',
  },
  {
    type: 'input',
    message: 'Please enter the Questions information...',
    name: 'question',
  },
  {
    type: 'input',
    message: 'Please enter your Github username...',
    name: 'github',
    validate: (value) => {if (value){return true} else {return "Please enter a valid username"}}
  },
  {
    type: 'input',
    message: 'Please enter the Github repository name',
    name: 'repo',
    validate: (value) => {if (value){return true} else {return "Please enter a valid repository name"}}
  },
  {
    type: 'input',
    message: 'Please enter your Email...',
    name: 'email',
    validate: (value) => {if (value){return true} else {return "Please enter a valid email"}}
  },
])

.then((response) => {
    let capColor = response.color[0].toLowerCase() + response.color.slice(1);
  switch (response.license) {
      case "GNU v3.0":
          selectedLicense = "![License: GNU v3.0](https://img.shields.io/badge/License-GNU%203.0-" + capColor + ".svg)";
          break;
      case "Apache 2.0":
          selectedLicense = "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-" + capColor + ".svg)";
          break;
      case "Boost 1.0":
          selectedLicense = "![License: Boost](https://img.shields.io/badge/License-Boost%201.0-" + capColor + ".svg)";
          break;
      case "GNU Affero v3.0":
          selectedLicense = "![License: GNU Affero](https://img.shields.io/badge/License-GNU%20Affero%203.0-" + capColor + ".svg)";
          break;
      case "Mozilla 2.0":
          selectedLicense = "![License: Mozilla](https://img.shields.io/badge/License-Mozilla%202.0-" + capColor + ".svg)";
          break;
      case "The Unlicense":
          selectedLicense = "![License: Unlicense](https://img.shields.io/badge/License-Unlicense-" + capColor + ".svg)";
          break;
      default:
        selectedLicense = "![License: MIT](https://img.shields.io/badge/License-MIT-" + capColor + ".svg)";
  }
  const template = generatedREADME(response);
  fs.writeFile("../generated-README/README.md", template, (err) => err ? console.log(err) : console.log(`\nREADME Generated \n\n\nThanks for using the README GENERATOR created by Kemal Demirgil`));
});