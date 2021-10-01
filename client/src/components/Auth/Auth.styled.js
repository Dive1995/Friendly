import styled from "styled-components";

export const StyledAuth = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 40px;
    margin-top: 100px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    border-radius: 5px;

    form{
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }

    Input{
        margin-bottom: 30px;
        padding: 10px 20px;
    }

    Button{
        width: 100%;
    }

    a{
        text-decoration: none;
        font-size: 11px;
        color: blueviolet;
        margin-top: 40px;
        cursor: pointer;
    }
`