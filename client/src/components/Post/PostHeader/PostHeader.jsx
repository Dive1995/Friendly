import {Options, StyledPostHeader, Time, User, UserDetails} from "./PostHeader.styled"
import { FaEllipsisH} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import { deletePost } from "../../../actions/posts"
import moment from 'moment'
import Button from "../../../Styles/Button.styled"

function PostHeader({ creator, createdAt, id }) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        console.log(id);
        dispatch(deletePost(id))
    }

    return (
        <StyledPostHeader>
            <UserDetails>
                <User>{creator}</User>
                <Time>{moment(createdAt).fromNow()}</Time>
            </UserDetails>
            <Options>
                <FaEllipsisH className="icon" onClick={handleDelete}/>
            </Options>
                {/* <Button>Edit</Button> */}
        </StyledPostHeader>
    )
}

export default PostHeader
