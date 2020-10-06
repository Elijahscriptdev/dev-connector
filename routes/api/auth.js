const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth"); //middleware validates token
const User = require("../../models/User");

// route =  GET api/auth
// desc  =  auth
// access = public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
  res.send(req.user);
});

module.exports = router;
