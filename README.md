# Portfolio Generator

![Node.js](https://img.shields.io/badge/16.15.0%20LTS-0?label=Node.js&style=for-the-badge&labelColor=white&color=black) ![Inquirer](https://img.shields.io/badge/8.2.4-0?label=Inquirer&style=for-the-badge&labelColor=white&color=black) ![Bootstrap CSS](https://img.shields.io/badge/4.0.0-0?label=Bootstrap%20CSS&style=for-the-badge&labelColor=white&color=black)

## Introduction

Portfolio Generator is a command-line application that allows the user to input some professional information about themselves in order to generate starter HTML code for a portfolio.

The app uses `inquirer` to prompt the user with queries rendered with `chalk`, and the returned data populates a parameterized template literal `HTML` string.

The template literal includes `Bootstrap CSS`, saving some time for lack of a custom `CSS` style.

I made this app to learn about `Node.js`, `Inquirer`, and template literals.

## Installation

| Steps                | Details                                                                  |
| -------------------- | ------------------------------------------------------------------------ |
| Install Node.js      | Download it at https://nodejs.org/en/                                    |
| Clone this repo      | ` git clone https://github.com/leoelicos/bcs-09-portfolio-generator.git` |
| Install dependencies | ` npm install`                                                           |

## Usage

| Steps                  | Details                     |
| ---------------------- | --------------------------- |
| Start                  | `npm start`                 |
| Answer the prompts     | `What is your name? {name}` |
| Find the file in dist/ | `cd dist`                   |

## Video Demo

https://user-images.githubusercontent.com/99461390/170214777-bc524565-bfcd-49ea-8d86-f4c38d690cca.mp4

---

## Screenshots

### Screenshot: Command-line prompts

![Screenshot: Command-line prompts](https://user-images.githubusercontent.com/99461390/170212137-7ee1bec4-9dd3-4005-b2e9-f732cf1d47a8.jpg)

### Screenshot: Generated Page

![Screenshot: Generated Page](https://user-images.githubusercontent.com/99461390/170215004-3a8d9722-5400-43a5-9154-2a4596c447a4.jpg)

## Credits

-  BCS Resources

## License

&copy; Leo Wong <leoelicos@gmail.com>

Licensed under the [MIT License](./LICENSE).
