import Input from "../../Styles/Input.styled"
import { Logo, Menu, NavStyled } from "./Nav.styled"

function Nav() {
    return (
        <NavStyled>
            <Logo>
                <h1>Friendly</h1>
            </Logo>
            <Input placeholder="Search"/>
            <Menu>
                <ul>
                    <li>Home Feed</li>
                    <li>Profile</li>
                    <li>Friends</li>
                    <li>Log In</li>
                </ul>
            </Menu>
        </NavStyled>
    )
}

export default Nav
