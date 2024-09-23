
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext , useMode  } from "./theme";
import Header_1 from './Components/Header/Header_1';
import Header_2 from './Components/Header/Header_2';
import Header_3 from './Components/Header/Header_3';


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
          <Header_2 /> 
          <Header_3 /> 
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
