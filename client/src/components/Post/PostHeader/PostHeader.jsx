import {Options, StyledPostHeader, Time, User, UserDetails} from "./PostHeader.styled"
import { FaEllipsisH} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import { deletePost } from "../../../actions/posts"
import moment from 'moment'
import Button from "../../../Styles/Button.styled"
import { setId } from "../../../actions/currentId"


function PostHeader({ creator, createdAt, id }) {
    const dispatch = useDispatch()

    return (
        <StyledPostHeader>
            <UserDetails>
                <User>{creator}</User>
                <Time>{moment(createdAt).fromNow()}</Time>
            </UserDetails>
            <Options>
                <FaEllipsisH className="icon" onClick={() => dispatch(deletePost(id))}/>
            </Options>
            <Button bg="hsl(222, 100%, 61%)" onClick={() => dispatch(setId(id))}>Edit</Button>
            
        </StyledPostHeader>
    )
}

export default PostHeader
