const validator = require('validator');
const chalk = require('chalk');
const fs = require('fs');
const notes = require('./notes')
fs.writeFileSync('notes.txt', 'Ms. Node is writing in your file!\n');
fs.appendFileSync('notes.txt', 'I am not a ghost! LOL\n');

successMessage = chalk.bold.green.underline
console.log(successMessage('Success!'))
// summation = notes(1,2)
// console.log(summation)

// data = notes()
// console.log(data)