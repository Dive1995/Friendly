const {Post, validatePost} = require("../model/post")
const mongoose = require('mongoose')
const _ = require('lodash')
const { User } = require("../model/user")

module.exports.getPosts = async(req, res) => {
    const posts = await Post.find().sort('-createdAt')
    res.json(posts)
}

module.exports.createPost = async (req, res) => {
    const userId = req.userId
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
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send("No post found, to delete")
    const post = await Post.findByIdAndDelete(id)
    if(!post) return res.status(404).send("Post doesn't exist");
    res.json(post)
}

module.exports.updatePost = async (req, res) => {
    const userId = req.userId;
    console.log({postid:req.params.id});
    console.log({ createId:req.body.creatorId});
    console.log("11111")
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({message:"The post doesn't exist"})
    
    const user = await User.findById(req.body.creatorId)
    if(!user) res.status(401).json({message: "Access Denied"})
    console.log("22222")
    const {error} = validatePost(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    console.log("3333")
    let post = await Post.findById(req.params.id)
    console.log({post});
    if(!post) return res.status(404).send("Post doesn't exist");
    console.log("444")
    if(post.creator._id.toString() !== userId) return res.status(403).json({message: "Access Denied"})
    console.log("555")
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