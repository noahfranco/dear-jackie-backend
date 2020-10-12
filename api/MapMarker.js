const router = require("express").Router();
const Marker = require("../models/MapMarkerModels.js");

// http://localhost:5000/api/event/marker
router.get("/getMarker", async (req, res) => {
  try {
    const game = await Marker.find();
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// http://localhost:5000/api/event/getMarker
router.post("/marker", async (req, res) => {
  const newGame = req.body;
  console.log(newGame);

  try {
    const game = await Marker.addMarker(newGame);
    res.status(201).json(game);
  } catch (err) {
    res.status(500).json({ err: "Error in adding user" });
  }
});

module.exports = router;
