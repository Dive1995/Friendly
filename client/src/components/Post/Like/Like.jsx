import { useEffect, useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { updateLike } from "../../../actions/posts"
import StyledLike from "./Like.styled"

function Like({likes, id}) {
    const dispatch = useDispatch()
    const [isLiked, setIsLiked] = useState(false)

    const triggerLike = (id) => {   
        dispatch(updateLike(id))
    }

    useEffect(() => {
        const index = likes.findIndex((id) => id === JSON.parse(localStorage.getItem('userProfile')).user._id)
        index === -1 ? setIsLiked(false) : setIsLiked(true)
    }, [likes])

    return (
        <StyledLike>
            <span className="heart" onClick={() => triggerLike(id)}>
                {isLiked ? <FaHeart/> : <FaRegHeart />}
            </span>
            <p>{likes.length}</p>
        </StyledLike>
    )
}

export default Like
