import Like from "./Like/Like"
import { Content, ImageContainer, StyledPost } from "./Post.styled"
import PostHeader from "./PostHeader/PostHeader"


function Post({post}) {
    return (
        <StyledPost>
        {/* https://codepen.io/cdevroe/pen/KzWOzZ */}
            <Content className="content">
                <PostHeader id={post._id} creator={post.creator} createdAt={post.createdAt}/>
                {post.title && <p>{post.title}</p>}
            </Content>
            <ImageContainer>
                {post.selectedFile && <img src={post.selectedFile} alt='' />}
            </ImageContainer>
            <Like/>
        </StyledPost>
    )
}

export default Post
