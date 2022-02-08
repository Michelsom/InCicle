import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root{
  --background:#F2F3F5;
  --lightColor:#FFFFFF;
  --blueColor:#3489B1;
  --yellowColor:#FFF2DE;
  --ColorName:#707070;
--colorButton:#b4b4b4;
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  @media (max-width:1080px){
    font-size:93.75%;
  }
  @media (max-width:720px){
    font-size:87.5%;
  display: flex;
flex-direction: column;
}

}

body{
  background: var(--background);
}
cursor{
  cursor:pointer;
  }
`;
