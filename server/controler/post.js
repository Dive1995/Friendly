const Post = require("../model/post")

module.exports.getPosts = async(req, res) => {
    const posts = await Post.find().sort('data')
    res.send(posts)
}

module.exports.createPost = async (req, res) => {
    const post = await new Post(req.body)
    await post.save()
    res.send(post)
}