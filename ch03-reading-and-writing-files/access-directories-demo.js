var fs = require('fs')

fs.readdir('/Users/', (err, data) => {
    console.log(data)
})