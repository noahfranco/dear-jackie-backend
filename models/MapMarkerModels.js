const db = require("../database/development/dbconfig.js"); 

module.exports = {
    addMarker, 
    findMarker
}

// find new markers slash events

function findMarker() {
    return db("marker")
}

// add new markers slash events 

function addMarker(events) {
    const add = db("marker").insert(events, "longitude", "latitude", "description", "date", "title")
}