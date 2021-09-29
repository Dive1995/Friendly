import styled from "styled-components";

export const StyledPostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;


    .icon{
        color: gray;
    }

`
export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
`

export const User = styled.p`
    display: inline;
    font-weight: bold;
    font-size:1.1rem;
    color:red;
    text-transform: capitalize;
    margin: 0;
    margin-bottom: 5px;
`

export const Time = styled.p`
    font-size:0.8rem;
    opacity: 0.7;
    margin:0;
`

export const Options = styled.span`
    border-radius: 50%;
    padding: 10px;

    &:hover{
        background-color: rgba(0,0,0,0.1);
        cursor: pointer;
    }

    ${'' /* &::after {
        content:'';
        display: block;
        right:30px;
        position: absolute;
        height: 100px;
        width: 200px;
        background-color:red;
    } */}
`
