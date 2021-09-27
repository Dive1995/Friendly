const { default: Post } = require("../Post/Post");

function HomeFeed() {
    return (
        <div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default HomeFeed
