import styled from "styled-components";

const StyledPostHeader = styled.div`
    display: flex;
    flex-direction: column;

    .creator{
        display: inline;
        font-weight: bold;
        font-size:1.1rem;
        color:red;
        text-transform: capitalize;
    }
    .createdAt{
        font-size:0.8rem;
        opacity: 0.7;
    }
`
export default StyledPostHeader