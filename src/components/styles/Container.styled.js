import styled from "styled-components";

export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    overflow: hidden;

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
    display: flex;
    justify-content: center;
    align-items: center;
}

   `