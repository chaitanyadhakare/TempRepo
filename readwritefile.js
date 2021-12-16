const {readFileSync, writeFileSync, write} = require('fs')

const first = readFileSync('first.txt','utf8')

console.log(first)

writeFileSync('first.txt',`Here is the result:${first}`)