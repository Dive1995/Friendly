import { FaRegHeart } from "react-icons/fa"
import StyledLike from "./Like.styled"

function Like() {
    return (
        <StyledLike>
            {/* <FaHeart className="heart"/> */}
            <FaRegHeart className="heart"/>
        </StyledLike>
    )
}

export default Like
