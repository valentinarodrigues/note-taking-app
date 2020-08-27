const chalk = require('chalk');
const fs = require('fs');
fs.writeFileSync('notes.txt', 'Ms. Node is writing in your file!\n');
fs.appendFileSync('notes.txt', 'I am not a ghost! LOL\n');

addNotes = (title, body) => {
    let listNotes = []
    listNotes = getNotes();
    duplicateCheck = listNotes.filter(function(note) {
        return note.title === title
    })
    if (duplicateCheck.length == 0){
        listNotes.push(
            {
                'title': title,
                'body': body
            }
        );
        pushJSON(fileName='notes.json', listNotes);  
        console.log(chalk.bold.green.underline('Note added successfully!'))
    }else{
        console.log(chalk.bold.red.underline('Duplicate note cannot be added!'))
    }
}

pushJSON = (fileName, listNotes) => {
    const pushedData = JSON.stringify(listNotes)
    fs.writeFileSync(fileName,pushedData);
}

getNotes = ()=> {
    try{
        // Get array of data from JSON file
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    }catch (e){
        return []
    }
}

removeNotes = (title) => {
    // check if the notes exits
    const notesList = getNotes()
    if (notesList.length === 0){
        console.log(chalk.bold.red('Notes empty'))
    }else{
        removeNote = notesList.filter(function(note){
           return note.title !== title; 
        })
        if(removeNote.length == 0){
            pushJSON(fileName='notes.json', removeNote)
            console.log(chalk.bold.green('Note removed'))
        }else{
            console.log(chalk.bold.red('Note not found'))
        }    
    }
}
module.exports = {
    getNotes: getNotes, 
    addNotes: addNotes, 
    removeNotes: removeNotes}
