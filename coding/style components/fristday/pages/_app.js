// import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/GlobalStyle.js";

const theme = {
  bg: "gray",
};


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
