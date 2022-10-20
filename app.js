const write = require('./write')
const read = require('./read')
const add = require('./add')
const del = require('./del')
const present = require('./present')


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