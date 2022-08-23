const { json } = require("express");
const http = require ("http");
const hostname = "127.0.0.1";
const port = 3000;

notes = [
    
{
"id":1,
"content":"Usuario 1 ",
"date":"22/8/2022",
"important": true,

},

{
    "id":2,
    "content":"Usuario 1 ",
    "date":"22/8/2022",
    "important": true,
    
},

{
    "id":3,
    "content":"Usuario 1 ",
    "date":"22/8/2022",
    "important": true,
    
}


]






const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(notes))
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    
  });
  console.log("Conectando...")