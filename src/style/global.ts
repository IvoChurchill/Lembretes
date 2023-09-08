import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: #d7d7e3;
    --purple-600: #3c0ce8;
    --purple-900: #30c6c9;

    --font-black: #1c1c1c;
    --font-white: #fff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    //1rem = 16px
    @media(max-width: 1080px) {
        font-size: 93.75%; // 1rem = 15 pixels
    }
    @media(max-width: 720px) {
        font-size: 87.5%; // 1 rem = 14 pixels
    }
}

`;