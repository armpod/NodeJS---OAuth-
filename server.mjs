import { createServer } from "http"; // named import, ES6 module management system

const server = createServer((req, res) => {
  res.end(`Hello world \n`);
});

server.listen(4242, () => {
  console.log(`Server is running!`);
});
