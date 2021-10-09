import Input from "../../Styles/Input.styled"
import { Container, Logo, Menu, NavStyled } from "./Nav.styled"
import { Link } from "react-router-dom"
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUser, FaUsers } from 'react-icons/fa'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {useHistory, useLocation} from 'react-router-dom'


function Nav({user, setUser}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation();


    useEffect(() => {
        setUser(JSON.parse(localStorage?.getItem('userProfile'))?.user)
      },[location])

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch({type: "LOG_OUT"})
        setUser(null)
        history.push('/auth')
    }


    return (
        <NavStyled>
            {/* <Container> */}
            <Logo>
                <Link to="/">
                    <h1>Friendly</h1>
                </Link>
            </Logo>
            <Input placeholder="Search"/>
            <Menu>
                <ul>
                    {user ? <>
                        {user?.lastName && <li><span>{user?.lastName?.charAt(0)}</span></li>}
                        <li><span><img src={user?.imageUrl}/></span></li>
                        <li>{user?.lastName || user?.familyName}</li>
                        {/* <li><Link to="/"><FaHome/> </Link></li> */}
                        {/* <li><Link to="/profile"><FaUser/></Link></li> */}
                        {/* <li><Link to="/friends"><FaUsers/></Link></li> */}
                        <li><a onClick={handleLogout} href=""><FaSignOutAlt/></a></li>
                    </> :
                    <li><Link to="/auth"><FaSignInAlt/></Link></li>
                    }
                </ul>
            </Menu>
            {/* </Container> */}
        </NavStyled>
    )
}

export default Nav
