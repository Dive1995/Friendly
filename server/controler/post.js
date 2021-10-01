const {Post, validatePost} = require("../model/post")
const mongoose = require('mongoose')
const _ = require('lodash')

module.exports.getPosts = async(req, res) => {
    const posts = await Post.find().sort('-createdAt')
    res.json(posts)
}

module.exports.createPost = async (req, res) => {
    const {error} = validatePost(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    if(!(req.body.title || req.body.selectedFile)) return res.status(400).send("Add some content!!")

    const post = await new Post(_.pick(req.body, ['title', 'selectedFile', 'creator']))
    await post.save()
    res.json(post)
}

module.exports.deletePost = async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("No post found, to delete")
    const post = await Post.findByIdAndDelete(id)
    if(!post) return res.status(404).send("Post doesn't exist");
    res.json(post)
}

module.exports.updatePost = async (req, res) => {
    const {error} = validatePost(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("No post found, to delete")
    const post = await Post.findByIdAndUpdate({_id: id}, {
        createdAt: Date.now() , ..._.pick(req.body, ['title', 'selectedFile', 'creator'])
        }, 
        { new: true, runValidators: true })
    if(!post) return res.status(404).send("Post doesn't exist");
    res.json(post)
}

module.exports.getSinglePost = async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("No post found")
    const post = await Post.findById(id)
    if(!post) return res.status(404).send('No post');
    res.json(post)
}

module.exports.updateLike = async (req, res) => {
    const userId = req.headers.userId;
    console.log(userId);

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({message: "No post found"})

    let post = await Post.findById(req.params.id)
    if(!post) return res.status(404).json({message: "No post found"})

    const index = post.likes.findIndex((id) => id === userId)

    if(index === -1){
        post.likes.push(userId)
    }else{
        post.likes = post.likes.filter((id) => id !== userId)
    }

    const newPost = await Post.findByIdAndUpdate({_id: req.params.id}, post, {new:true})
    res.json(newPost)
}