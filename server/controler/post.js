const Post = require("../model/post")

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