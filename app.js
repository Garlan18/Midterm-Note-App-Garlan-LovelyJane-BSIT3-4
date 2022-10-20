const write = require('./write')
const read = require('./read')
const add = require('./add')

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