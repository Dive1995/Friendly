import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const { default: Post } = require("../Post/Post");

function HomeFeed({user}) {
    const posts = useSelector((state) => state.posts)
    
    if(posts?.length < 1){
        return <Loading/>
    }

    return (
        <InfiniteScroll
            dataLength={posts.length}
            
        >
            {posts.map((post) => <Post user={user} key={post._id} post={post}/>)}
        </InfiniteScroll>
    )
}

export default HomeFeed
