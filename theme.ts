import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const themeObj = {
  config: {
    initialColorMode: "dark",
  },
  colors: {
    brand: {
      primary: {
        1000: "#7979de",
        900: "#8D8DE2",
        800: "#9E9EE6",
        700: "#AEAEEA",
        600: "#BEBEEE",
        500: "#CECEF2",
        400: "#DFDFF6",
      },
      secondary: {
        1000: "#78DD78",
        900: "#82E082",
        800: "#8CE28C",
        700: "#95E595",
        600: "#9FE79F",
        500: "#A8E9A8",
        400: "#B2ECB2",
      },
      white: "#F5F5F5",
      gray: "#27272c",
      darkgray: "#232329",
      text: {
        dark: "#696969",
        light: "#E1E1E1",
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("brand.white", "brand.gray")(props),
        minHeight: "100vh",
        overflowX: "hidden",
      },

      p: {
        color: mode("#696969", "#E1E1E1")(props),
      },
      span: {
        color: mode("#696969", "#E1E1E1")(props),
      },
    }),
  },
};

const theme = extendTheme(themeObj);

export default theme;
