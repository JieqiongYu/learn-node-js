var fs = require('fs')

var data = {
    name : 'Mer-write'
}

fs.writeFile('data-write.json', JSON.stringify(data), (err) => {
    console.log('write finished', err)
})