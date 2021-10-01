import styled from "styled-components";

export const NavStyled = styled.nav`
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    padding: 0 5rem;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`

`

export const Menu = styled.div`
    ul{
        list-style-type: none;
        display: flex;
    }

    li{
        margin-left: 1rem;
    }

    a{
        text-decoration: none;
        color: #333;
        /* font-size: 0.9rem; */

        &:hover{
            font-weight: bold;
            ${'' /* color: #efbbff; */}
            border-bottom: 2px solid #efbbff;
            padding-bottom: 3px;
        }
    }
    
`

export const Container = styled.div`
    max-width: 800px;
    width: 100%;  
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    /* padding: 0 5rem; */
    align-items: center;
    justify-content: space-between;
`