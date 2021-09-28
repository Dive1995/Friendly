import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Quicksand', sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: "Montserrat", "Quicksand", sans-serif;
        margin: 0;
        line-spacing:1.5;
    }
    
    img {
        max-width: 100%;
        object-fit: cover;
    }

`
export default GlobalStyles;