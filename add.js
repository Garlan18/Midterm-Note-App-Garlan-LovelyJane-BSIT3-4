const fs = require('fs')
const { parse } = require('path')
const { stringify } = require('querystring')

const add = function(note=[], oldNote) {

  const newNote = JSON.parse(oldNote)

    newNote.push(note)

    fs.writeFileSync('note.txt', JSON.stringify(newNote))
}

module.exports = add