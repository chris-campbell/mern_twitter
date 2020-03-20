const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is a Tweets route" }));

module.exports = router;
