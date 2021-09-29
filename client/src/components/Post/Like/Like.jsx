import { FaRegHeart } from "react-icons/fa"
import StyledLike from "./Like.styled"

function Like() {
    return (
        <StyledLike>
            {/* <FaHeart className="heart"/> */}
            <FaRegHeart className="heart"/>
            <p>100+</p>
        </StyledLike>
    )
}

export default Like
