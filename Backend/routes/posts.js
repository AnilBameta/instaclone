const express = require("express");
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();
const Posts = require("../models/Posts");
const axios = require('axios')

//getAllPost
router.get('/allpost',(req,res)=> {
    Posts.find()
    .populate("postedBy","_id username")
    .then(post => {
        res.json({post})
    })
    .catch(err => console.log(err))
})

//postByUser
router.get('/postByUser',requireLogin,(req,res)=> {
    Posts.find({postedBy:req.user._id})
    .then(post => {
        res.json({post})
    })
    .catch(err => console.log(err))
})

//CreatePost
router.post('/createpost',requireLogin,(req,res) =>{   
    const post = new Posts({
        title:req.body.title,
        body:req.body.body,
        postedBy:req.user ,
        photo:req.body.photo
    })
    post.save()
    .then(result => {
        res.json({result})
    })
    .catch(err =>{
        console.log(err)
    })
})

//DeletePost

router.delete("/:id", requireLogin, async (req, res) => {
    try {
      await Posts.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;