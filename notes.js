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
        console.log('Not a duplicate note');
        pushJSON(fileName='notes.json', listNotes);
       
    }else{
        console.log('Duplcate note cannot be added')
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
    console.log('Removing note', title)
    // check if the notes exits
    const notesList = getNotes()
    if (notesList.length === 0){
        console.log('Notes empty') 
    }else{
        removeNote = notesList.filter(function(note){
           return note.title !== title; 
        })
        console.log(removeNote)
        pushJSON(fileName='notes.json', removeNote)
        

    }
}
module.exports = {
    getNotes: getNotes, 
    addNotes: addNotes, 
    removeNotes: removeNotes}


// const name = 'VR27'
// const getSum = function(a,  b){
//     return a+b;
// }
// module.exports = getSum

// summation = notes(1,2)
// console.log(summation)

// data = notes()
// console.log(data)

