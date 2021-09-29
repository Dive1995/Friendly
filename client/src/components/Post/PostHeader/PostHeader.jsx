import {Options, StyledPostHeader, Time, User, UserDetails} from "./PostHeader.styled"
import { FaEllipsisH} from 'react-icons/fa'

function PostHeader({ creator, createdAt }) {
    return (
        <StyledPostHeader>
            <UserDetails>
                <User>{creator}</User>
                <Time>{createdAt}</Time>
            </UserDetails>
            <Options>
                <FaEllipsisH className="icon"/>
            </Options>
        </StyledPostHeader>
    )
}

export default PostHeader
