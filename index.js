import chalk from 'chalk';
import inquirer from 'inquirer';
import { writeFile } from 'fs';

const generateHTML = ({ name, location, github, linkedin }) =>
	`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>${name}'s Portfolio</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Portfolio <span class="badge badge-secondary">Contact Me Here:</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is <a href="https://github.com/${github}">${github}</a></li>
      <li class="list-group-item">My LinkedIn is <a href="https://www.linkedin.com/in/${linkedin}">${linkedin}</a></li>
    </ul>
  </div>
</div>
</body>
</html>`;

const questions = [
	{
		type: 'input',
		name: 'name',
		prefix: ' What is your',
		message: chalk.rgb(255, 154, 162)('name'),
		suffix: '?'
	},
	{
		type: 'input',
		name: 'location',
		prefix: ' What is your',
		message: chalk.rgb(255, 183, 178)('location'),
		suffix: '?'
	},
	{
		type: 'input',
		name: 'hobby',
		prefix: ' What is your',
		message: chalk.rgb(255, 218, 193)('favorite hobby'),
		suffix: '?'
	},
	{
		type: 'input',
		name: 'food',
		prefix: ' What is your',
		message: chalk.rgb(226, 240, 203)('favorite food'),
		suffix: '?'
	},
	{
		type: 'input',
		name: 'github',
		prefix: ' What is your',
		message: chalk.rgb(181, 234, 215)('GitHub handle'),
		suffix: '?'
	},
	{
		type: 'input',
		name: 'linkedin',
		prefix: ' What is your',
		message: chalk.rgb(199, 206, 234)('LinkedIn handle'),
		suffix: '?'
	}
];

// helper function to pad messages
const screenWidth = 80;
const pad = (text) => text.padEnd(screenWidth);
const init = async () => {
	const welcomeMessage = chalk.black.bgWhite(pad('') + '\n' + pad('PORTFOLIO GENERATOR') + '\n' + pad(''));
	console.log(welcomeMessage);

	try {
		const answers = await inquirer.prompt(questions);

		const htmlPageContent = generateHTML(answers);

		const writeResponse = await new Promise((resolve, reject) =>
			writeFile('./dist/index.html', htmlPageContent, (err) => {
				if (err) {
					reject(new Error(err));
				}
				const message = chalk.rgb(255, 154, 162)('Successfully created index.html in the dist/ folder!');
				resolve(message);
			})
		);

		console.log(writeResponse);
	} catch (err) {
		console.error(err);
	}

	const goodbyeMessage = chalk.black.bgWhite(pad('') + '\n' + pad('Thank you for using Portfolio Generator.') + '\n' + pad(''));
	console.log(goodbyeMessage);
};

init();
