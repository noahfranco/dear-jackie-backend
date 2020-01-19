const express = require("express"); 
const server = express()

// cross platform dep and security
const cors = require("cors"); 
const helmet = require("helmet"); 

server.use(cors());
server.use(helmet());


// test server 
server.get("/", (req, res) => {
    res.status(200).json({ response: "server is responding" })
})

module.exports = server; 