
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Switch, Paper, Typography } from "@mui/material";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Navbar from "../../components/Navbar";

export default function App({ Component, pageProps }) {
  const [isDark, setDark] = useState(false);
  console.log(isDark);

  let theme = createTheme({
    palette: {
      mode: isDark ? "light" : "dark",
    },
    typography: {
      h1: {
        fontWeight: 600,
        fontSize: "30px",
        lineHeight: 2.75,
      },
      h2: {
        fontWeight: 600,
        color: "red !important",
        fontSize: "10rem !important",
        lineHeight: 2.125,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme/>
    <Navbar></Navbar>
        {/* <Paper>
          <Switch onClick={() => setDark(!isDark)} />

          <Typography variant="h1" component={'p'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            modi omnis reprehenderit vel porro! Rerum cumque adipisci iste,
            accusantium pariatur excepturi iure asperiores eaque totam, suscipit
            eius quasi? Dignissimos, modi!
          </Typography>
        </Paper> */}
        {/* <Paper>
          <h1>this is paper</h1>
        </Paper> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
