const express = require("express");
const router = express.Router();

router.get("/videos", (req, res) => {
  res.status(200).json(videos);
});

// router.get("/exclusive", (req, res) => {
//   res.status(200).json(exclusiveVideos);
// });

module.exports = router;
