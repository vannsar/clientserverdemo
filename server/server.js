const express = require('express');
const cors = require('cors');
const server = express();

const names = [
  {
    "name": "Van"
  },
  {
    "name": "Batman"
  }
];

const food = [
  {
    "foodname": "pizza",
    "agePreferred": 14
  },
  {
    "foodname": "sushi",
    "agePreffered": 17
  }
];

server.use( cors() );

server.get('/names/', (request, response)=> {
  response.send(names);
});

server.get('/favfoods/',(request, response)=> {
  response.send(food);
});

server.listen(3001, ()=>{
  console.log("Server has started");
});
