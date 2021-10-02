import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const { default: Post } = require("../Post/Post");

function HomeFeed({user}) {
    console.log({HomeFeed : user});
    const posts = useSelector((state) => state.posts)
    
    if(posts?.length < 1){
        return <Loading/>
    }

    return (
        <div>
            {posts.map((post) => <Post user={user} key={post._id} post={post}/>)}
        </div>
    )
}

export default HomeFeed
