import Input from "../../Styles/Input.styled"
import { Container, Logo, Menu, NavStyled } from "./Nav.styled"
import { Link } from "react-router-dom"
import { FaHome, FaSignInAlt, FaUser, FaUsers } from 'react-icons/fa'


function Nav() {
    return (
        <NavStyled>
            {/* <Container> */}
            <Logo>
                <h1>Friendly</h1>
            </Logo>
            <Input placeholder="Search"/>
            <Menu>
                <ul>
                    <li><Link to="/"><FaHome/> </Link></li>
                    <li><Link to="/profile"><FaUser/></Link></li>
                    <li><Link to="/friends"><FaUsers/></Link></li>
                    <li><Link to="/auth"><FaSignInAlt/></Link></li>
                </ul>
            </Menu>
            {/* </Container> */}
        </NavStyled>
    )
}

export default Nav
