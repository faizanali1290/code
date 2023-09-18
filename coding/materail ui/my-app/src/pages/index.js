import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
  Paper,
  Link,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { orange, red } from "@mui/material/colors";
import { styled, res } from "@mui/system";

export default function Home() {
  const defaultTheme = useTheme();
  // console.log(defaultTheme)
  const matches = useMediaQuery(defaultTheme.breakpoints.up("sm"));
  console.log(matches);

  // console.log("default theme", defaultTheme);
  const createThem = createTheme();
  // console.log("createThem", createThem);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffFf",
        yellow: "#873e23",
      },
    },
  });

  const Div = styled("div")(({ bg }) => ({
    background: bg,
  }));
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography
          variant="h2"
          fontSize={18}
          sx={{
            color: theme.palette.primary.yellow,
          }}
        >
          this is button collection
        </Typography>
        <Typography color="" fontSize={18}>
          this is button collection
        </Typography>
        Muilink
        <Link href="/about">about</Link>
        {/* similar to */}
        <Button variant="contained" to="/about">
          contained
        </Button>
        <Button
          variant="text"
          sx={{
            "&:hover": {
              background: "red",
            },
          }}
        >
          text
        </Button>
        <Button variant="outlined">outline</Button>
      </Box>
      <Div
        bg="yellow"
        // [darkTheme.]
        sx={{
          [defaultTheme.breakpoints.up("sm")]: {
            backgroundColor: "red",
          },
          [defaultTheme.breakpoints.up("md")]: {
            backgroundColor: "yellow",
          },
          [defaultTheme.breakpoints.up("lg")]: {
            backgroundColor: "purple",
          },
          [defaultTheme.breakpoints.up("xl")]: {
            backgroundColor: "oranges",
          },
        }}
      >
        <Typography variant="h1" color="secondary.light" component="a">
          down(md): red
        </Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Div>
      <Box
        sx={{
          // width:"20px",
          p: {
            xs: "20px",
            sm: "40px",
            md: "100px",
          },
          background: "yellow",
        }}
      >
        iam a box
        <Typography variant="h2">is responsive font size</Typography>
      </Box>
      <Typography component={"h1"}>this is a grid</Typography>

      <Grid container>
        <Grid item xs={12}  sm={6} md={3} bgcolor={'red'}>
          one
        </Grid>
        <Grid item xs={12} sm={6} md={3} bgcolor={'purple'}>
          two
        </Grid>
        <Grid item xs={12} sm={6} md={3} bgcolor={"gray"}>
          xs
        </Grid>
        <Grid item xs={12} sm={6} md={3} bgcolor={"purple"}>
          four
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
