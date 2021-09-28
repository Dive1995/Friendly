function Post({post}) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.message}</p>
            <p>{post.creator}</p>
            <p>{Date(post.createdAt).toString()}</p>
        </div>
    )
}

export default Post
