import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts } from "../../actions/posts";
import { useEffect } from "react";

const { default: Post } = require("../Post/Post");

function HomeFeed({user}) {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchData()
      }, [])

    const fetchData = () => {
        dispatch(getPosts(1, 2))
    }
    
    if(posts?.length < 1){
        return <Loading/>
    }

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            {posts.map((post) => <Post user={user} key={post._id} post={post}/>)}
        </InfiniteScroll>
    )
}

export default HomeFeed
