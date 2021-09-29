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
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("No post found, to delete")
    const post = await Post.findByIdAndDelete(id)
    if(!post) return res.status(404).send("Post doesn't exist");
    res.send("Post deleted ! : " + post)
}

module.exports.updatePost = async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("No post found, to delete")
    const post = await Post.findByIdAndUpdate({_id: id}, req.body, { new: true, runValidators: true })
    if(!post) return res.status(404).send("Post doesn't exist");
    res.send("Post deleted ! : " + post)
}

module.exports.getSinglePost = async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("No post found")
    const post = await Post.findById(id)
    if(!post) return res.status(404).send('No post');
    res.send(post)
}