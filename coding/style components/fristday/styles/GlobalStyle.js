import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
    background:gray ;
}
button:hover{
 color:white;
 font-size:1.3rem
}
button:focus{
  background:red 
}
`;
export { GlobalStyle };
