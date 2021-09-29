const Post = require("../model/post")
const mongoose = require('mongoose')

module.exports.getPosts = async(req, res) => {
    const posts = await Post.find()
    res.send(posts)
}

module.exports.createPost = async (req, res) => {
    if(!(req.body.title || req.body.selectedFile)) return res.status(400).send("Add some content!!")
    const post = await new Post(req.body)
    await post.save()
    res.send(post)
}

module.exports.deletePost = async (req, res) => {
    const id = req.params._id
    if(!mongoose.Types.ObjectId.isValid()) return res.status(400).send("No post found, to delete")
    await Post.findByIdAndDelete(id)
    res.send("Post deleted !")
}