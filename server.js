const express = require("express"); 
const server = express()

// cross platform dep and security
const cors = require("cors"); 
const helmet = require("helmet"); 

const mapMarkerRouter = require("./api/MapMarker.js"); 


server.use(cors());
server.use(helmet());
server.use(express.json())

server.use("/api/event", mapMarkerRouter); 


// test server 
server.get("/", (req, res) => {
    res.status(200).json({ response: "server is responding" })
})

module.exports = server; 