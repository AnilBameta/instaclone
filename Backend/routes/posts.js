const express = require("express");
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();
const Posts = require("../models/Posts");

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
        postedBy:req.user 
    })
    post.save()
    .then(result => {
        res.json({result})
    })
    .catch(err =>{
        console.log(err)
    })
})

module.exports = router;