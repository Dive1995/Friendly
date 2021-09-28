import StyledPostHeader from "./PostHeader.styled"

function PostHeader({ creator, createdAt }) {
    return (
        <StyledPostHeader>
            <span><p className="creator">{creator}</p></span>
            <span className="createdAt">{createdAt}</span>
        </StyledPostHeader>
    )
}

export default PostHeader
