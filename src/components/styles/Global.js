import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
}
body {
    height: 100vh;
    background: linear-gradient(
        to right,
        pink 0%,
        pink 50%,
    );
    font-family: 'Poppins', sans-serif;
    color: hsl(192,100%, 9%);
    font-size: 1.15em;
    margin: 0;
    dsiplay: flex;
    justify-content: center;
    align-items: center;
}

`
export default GlobalStyles;