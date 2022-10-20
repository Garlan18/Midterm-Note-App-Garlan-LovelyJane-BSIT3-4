const write = require('./write') //WRITE
const read = require('./read') //READ
const add = require('./add') //ADD
const del = require('./del') //DELETE
const present = require('./present') //PRESENT
const update = require('./update') //UPDATE

const cmd = process.argv

//(---READ---)
if(cmd[2] == 'read' ) {
    console.log(read())
}

//(---ADD---)
if(cmd[2] == 'add') {

    const note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5],
    }
    const oldNote = read()
    
    add(note, oldNote)
}

//(---DELETE---)
if (cmd[2]=="delete"){
    console.log('delete function')
    const id = cmd[3]
    const oldNote = read()
    const del = require('./del')
    del(id,oldNote);
    console.log(read());
}

//(---UPDATE---)
if(cmd[2] == 'update'){
    const note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }

    const oldNote = read()

    update(note, oldNote)

    present(read())
}