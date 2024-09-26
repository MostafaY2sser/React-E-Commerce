
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext , useMode  } from "./theme";
import Header_1 from './Components/Header/Header_1';
import Header_2 from './Components/Header/Header_2';
import Header_3 from './Components/Header/Header_3';
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/scroll/ScrollToTop";




function App() {

    const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider 
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider 
        // @ts-ignore
        theme={theme}>
          <CssBaseline />
          <Header_1 /> 
          <Header_2/> 
          <Header_3 /> 
          <Box sx={{bgcolor: theme.
// @ts-ignore
          palette.bgHero.main}}>
            <Hero/>
            <Main />
            <Footer />
            <ScrollToTop  />
          </Box>
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
