import { useSelector } from "react-redux";

const { default: Post } = require("../Post/Post");

function HomeFeed() {

    const posts = useSelector((state) => state.posts)
    

    return (
        <div>
            {posts.map((post) => <Post key={post._id} post={post}/>)}
        </div>
    )
}

export default HomeFeed
