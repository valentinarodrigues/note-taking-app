
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

        console.log(title, body)
        pushedData = JSON.stringify(listNotes)
        fs.writeFileSync('notes.json' ,pushedData)
    }else{
        console.log('Duplcate note cannot be added')
    }
    
}


getNotes = ()=> {
    try{
        // Get array of data from JSON file
        dataBuffer = fs.readFileSync('notes.json');
        dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    }catch (e){
        return []
    }
}

removeNotes = (title) => {
    console.log('Removed', title)
}
module.exports = {getNotes, addNotes, removeNotes}


// const name = 'VR27'
// const getSum = function(a,  b){
//     return a+b;
// }
// module.exports = getSum

// summation = notes(1,2)
// console.log(summation)

// data = notes()
// console.log(data)

