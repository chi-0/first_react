import { createGlobalStyle } from "styled-components";
// =>reset css 작성
import reset from "styled-reset";

export const mainColors = {
  fontColor: "#333",
  pointColor: "#85e6c5",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
    }

    a {
        text-decoration: none;
    }
`;
