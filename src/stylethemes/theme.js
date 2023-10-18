import { createTheme } from "@mui/material";



const CustomDefaultTheme = createTheme({
    
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl"],
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1450,
        },
      },
      palette: {
        primary: {
          main: "#04939d",
        },
      },
      typograph: {
        fontFamily: [
          '',

        ].join(',',)
      },

})


export default CustomDefaultTheme;