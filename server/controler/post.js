const {Post, validatePost} = require("../model/post")
const mongoose = require('mongoose')
const _ = require('lodash')
const { User } = require("../model/user")

module.exports.getPosts = async(req, res) => {
    const pageNumber = Number(req.query.pageNumber);
    const pageSize = Number(req.query.pageSize) || 10;


    const posts = await Post
        .find()
        .sort('-createdAt')
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)

    res.json(posts)
}

module.exports.createPost = async (req, res) => {
    const {error} = validatePost(req.body)

    if(error) return res.status(400).json({message: error.details[0].message})

    if(!(req.body.title || req.body.selectedFile)) return res.status(400).json({message:"Add some content!!"})

    const user = await User.findById(req.body.creatorId)
    if(!user) res.status(401).json({message: "Access Denied."})

    const post = await new Post({
        title: req.body.title,
        creator: {
            _id: user._id,
            userName: `${user.firstName} ${user.lastName}`
        },
        selectedFile: req.body.selectedFile
    })
    await post.save()
    res.json(post)
}

module.exports.deletePost = async (req, res) => {
    const userId = req.userId;

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).send("No post found, to delete")

    let post = await Post.findById(req.params.id)
    if(!post) return res.status(404).send("Post doesn't exist");

    if(post.creator._id.toString() ==! userId ) return res.status(403).json({message: "Access Denied"})

    const deletedPost = await Post.findByIdAndDelete(req.params.id)
    res.json(deletedPost)
}

module.exports.updatePost = async (req, res) => {
    const userId = req.userId;
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({message:"The post doesn't exist"})
    
    const user = await User.findById(req.body.creatorId)
    if(!user) res.status(401).json({message: "Access Denied"})

    const {error} = validatePost(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    let post = await Post.findById(req.params.id)

    if(!post) return res.status(404).send("Post doesn't exist");

    if(post.creator._id.toString() !== userId) return res.status(403).json({message: "Access Denied"})

    // client: only the creator gets the edit, delete buttons

    post.title = req.body.title,
    post.selectedFile = req.body.selectedFile
    
    const updatedPost = await post.save()
    
    res.json(updatedPost)
}

module.exports.getSinglePost = async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("No post found")
    const post = await Post.findById(id)
    if(!post) return res.status(404).send('No post');
    res.json(post)
}

module.exports.updateLike = async (req, res) => {
    const userId = req.userId;

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