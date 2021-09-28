import styled from "styled-components";

export const StyledCreatePost = styled.div`
    ${'' /* background-color: ${({theme}) => theme.colors.createPost}; */}
    background-color: ${({theme}) => theme.colors.post};
    margin: 20px auto;
    padding: 20px 40px;
    border-radius: 20px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
`

export const Content = styled.div`
    display: flex;
`

export const ButtonContainer = styled.div`
    display: flex;
    padding: 20px 0;
`
