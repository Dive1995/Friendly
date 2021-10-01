import { FaRegHeart } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { updateLike } from "../../../actions/posts"
import StyledLike from "./Like.styled"

function Like({likes, id}) {
    const dispatch = useDispatch()

    const triggerLike = (id) => {   
        dispatch(updateLike(id))
    }

    return (
        <StyledLike>
            {/* <FaHeart className="heart"/> */}
            <FaRegHeart className="heart" onClick={() => triggerLike(id)}/>
            <p>{likes.length}</p>
        </StyledLike>
    )
}

export default Like
