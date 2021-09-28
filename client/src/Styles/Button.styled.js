import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    font-size: 16px;
    padding: 1rem 3rem;
    margin-right: 10px;
    font-weight: bold;
    ${'' /* background-color: ${(bg) => bg || "#ff0099"}; */}
    background-color:#ff0099;
    color: #fff;
    border-radius: 50px;
    border: none;
    letter-spacing: 1px;
    box-shadow: 0 0 5px  rgba(0,0,0,0.2);

    &:hover{
        opacity: 0.8;
        transform: scale(0.98)
    }
` 
export default Button;