import styled from "styled-components";

export const StyledPost = styled.div`
    background-color: ${({theme}) => theme.colors.post};
    box-shadow: 0 0 3px rgba(0,0,0,0.2);
    border-radius: 5px;
    margin-bottom: 20px;
`

export const Content = styled.div`
    padding: 20px;
`

export const ImageContainer = styled.div`
    max-height: 600px;
    overflow: hidden;

    ${'' /* img{
        height: 100%;
        object-fit: contain;
    } */}
`
