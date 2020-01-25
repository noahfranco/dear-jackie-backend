const router = require("express").Router(); 
const Marker = require("../models/MapMarkerModels.js");

// To add a new marker to the map and event
router.post("/marker", (req, res) => {
    let body = req.body

    if(body) {
      Marker.addMarker(body)
      res.status(200).json({ message: "data posted successfully" })
    } else {
        res.status(500).json({ error: "Internal server error" })
    }
});

router.get("/getMarker", (req, res) => {
    let body = req.body
    let id = req.params

    if(body && id) {
        Marker.findMarker()
        res.status(200).json({ message: "data received successfully" })
    } else {
        res.status(500).json({ error: "Internal server error" })
    }
})


module.exports = router; 