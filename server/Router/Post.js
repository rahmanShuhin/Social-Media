const router = require("express").Router();
const verify = require("./Verify");
const Post = require("../Models/Posts");
router.get("/get", verify, async (req, res) => {
  const allPost = await Post.find({});
  res.send(allPost);
});

router.post("/save", verify, async (req, res) => {
  const data = new Post({
    userId: req.body.userId,
    name: req.body.name,
    img: req.body.img,
    caption: req.body.caption,
    file: req.body.body,
  });
  try {
    const savedPost = await data.save();
    res.send(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
