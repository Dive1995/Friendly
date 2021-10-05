import styled from "styled-components";

export const StyledCreatePost = styled.div`
    ${'' /* background-color: ${({theme}) => theme.colors.createPost}; */}
    background-color: ${({theme}) => theme.colors.post};
    margin: 20px auto;
    padding: 20px 40px;
    border-radius: 20px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);


    span{
        font-weight: bold;
        color: #000;
    }

`

export const Content = styled.div`
    display: flex;

    ${'' /* input[type="file"]{
        display:none;
    } */}

    ${'' /* label{
        display: block;
        height:50px;
        background-color:green;
        texit-align:center;
        padding: 5px;
    } */}
`

export const ButtonContainer = styled.div`
    display: flex;
    padding: 20px 0;
`
export const ImagePreview = styled.div`
    max-width: 600px;
    width:100%;
    img{
        ${'' /* width: 500px; */}
        margin-top:30px;
    }
`