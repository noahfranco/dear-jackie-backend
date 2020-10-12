const db = require("../database/development/dbconfig.js");

module.exports = {
  addMarker,
  findMarker,
  find,
};

function find() {
  return db("our-storie");
}

// find new markers slash events

function findMarker() {
  return db("our-storie").where(
    "title",
    "date",
    "description",
    "longitude",
    "latitude"
  );
}

// add new markers slash events

function addMarker(events) {
  return db("our-storie").insert(
    events,
    "id",
    "longitude",
    "latitude",
    "description",
    "date",
    "title"
  );
}
