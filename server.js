const http = require('http')  // commonJS module management system

const server = http.createServer((req, res) => {
    res.end(`Hello world \n`)
})

server.listen(4242, () => {
    console.log(`Server is running!`)
})