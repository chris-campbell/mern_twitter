const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  console.log(res);
});

//   res.json({
//     msg: "This is a users route"
//   })

module.exports = router;
