import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          bg:{
            main :"#f6f6f6"
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
          myColor: {
            main: "#F6F9FC"
          },
          textmode:{
            main:"#3339"
          },
          bgHero:{
            main: "#f6f6f6"
          },
          bgIcon:{
            main: "#fff"
          }
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },
          bg:{
            main :"#1D2021"
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          myColor: {
            main: "#252b32"
          },
          textmode:{
            main:"#eee9"
          } ,
          bgHero:{
            main: "#1D2021"
          },
          bgIcon:{
            main: "#0009"
          }
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};