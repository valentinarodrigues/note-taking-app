// const validator = require('validator');
const messagechalk = require('./messageschalk');
const yargs = require('yargs');
const notes = require('./notes')
data = process.argv;

//Customize yargs version
yargs.version('1.0.9');


// Add list command
// node app.js add --title="add" --body="Need to send mail" 
yargs.command({
    command: "add",
    describe: "Adds a note",
    handler: function(argv) {
        console.log('Adding to notes')
        notes.addNotes(argv.title, argv.body)
    }
})

// Remove list command
yargs.command({
    command: "remove",
    describe: "Remove from a list",
    handler: function(){
        console.log('Remove from a note')
    }
})

// List note command
yargs.command({
    command: "list",
    describe: "Lists the notes",
    builder:{
        // node app.js --title "What a beautiful day!"
        title: {
            describe: "Name of the title",
            demandOption: true,
            type: 'string'
        },
        // node app.js --body "I am the body"
        body: {
            describe: "Body of the argument",
            demandOption: true,
            type: 'string'
        }
    },
    // important to pass argv as a parameter
    handler: function(argv){
        console.log("Listing the notes");
        
        console.log(messagechalk(argv.title));
        console.log(messagechalk(argv.body));
    }
})

// Read command
yargs.command({
    command: "read",
    describe: "Reads the list",
    handler: function(){
        console.log('Reading the list')
    }
})


// console.log(yargs.argv);
// console.log(messagechalk(data));