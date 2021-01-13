const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//registration
router.post("/register", async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    res.status(400).send("Email Already Exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPass,
    });
    try {
      const savedUser = await user.save();
      res.send({ user: user._id });
    } catch (error) {
      res.status(400).send(error);
    }
  }
});

//login
router.post("/login", async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (!emailExist) {
    res.status(400).json({ err: "Email is not valid" });
  } else {
    const user = await User.findOne({ email: req.body.email });
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      res.status(400).json({ err: "Password is not valid" });
    } else {
      const token = jwt.sign(
        { _id: user._id, email: user.email },
        process.env.TOKEN_SECRET
      );
      res.header("auth-token", token).json(token);
      // res.send("Login Success");
    }
  }
});

module.exports = router;
