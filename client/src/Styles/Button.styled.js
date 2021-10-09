import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    font-size: 13px;
    padding: 0.75rem 1.5rem;
    margin-right: 10px;
    font-weight: bold;
    background-color: ${({bg}) => bg};
    color: #fff;
    border-radius: 20px;
    border: none;
    letter-spacing: 1px;
    box-shadow: 0 0 5px  rgba(0,0,0,0.2);
    margin: 0.2rem 0;

    &:hover{
        opacity: 0.8;
        transform: scale(0.98)
    }
` 
export default Button;