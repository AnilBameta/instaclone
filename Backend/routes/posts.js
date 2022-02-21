const express = require("express");
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();
const Posts = require("../models/Posts");

//getAllPost
router.get("/allpost", (req, res) => {
  Posts.find()
    .populate("postedBy", "_id username")
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => console.log(err));
});

//postByUser
router.get("/postByUser", requireLogin, (req, res) => {
  Posts.find({ postedBy: req.user._id })
    .sort({ _id: -1 })
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => console.log(err));
});

//CreatePost
router.post("/createpost", requireLogin, async (req, res) => {
  const post = await new Posts({
    title: req.body.title,
    body: req.body.body,
    postedBy: req.user,
    photo: req.body.photo,
  });
  post
    .save()
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      res.status(500).json({
        err,
      });
    });
});

//DeletePost

router.delete("/:id", requireLogin, async (req, res) => {
  try {
    await Posts.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//LikePost

router.put("/:id", requireLogin, (req, res) => {
  Posts.findById(req.params.id).then((result) => {
    let likeValue = !result.like;
    Posts.findByIdAndUpdate(
      req.params.id,
      { like: `${likeValue}` },
      function (err, docs) {
        console.log(docs);
      }
    );
    res.status(200).json(result);
  });
});

//GetLikedPosts

router.get("/getLikedPosts", (req, res) => {
  Posts.find({ like: true })
    .populate("postedBy", "_id username")
    .then((result) => res.json(result))
    .catch((err) => res.status(501).json(err));
});

module.exports = router;
