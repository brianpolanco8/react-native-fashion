import {
  BaseTheme,
  createBox,
  createText,
  createTheme,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

// const palette = {
//   purpleLight: "#8C6FF7",
//   purplePrimary: "#5A31F4",
//   purpleDark: "#3F22AB",

//   greenLight: "#56DCBA",
//   greenPrimary: "#0ECD9D",
//   greenDark: "#0A906E",

//   black: "#0B0B0B",
//   white: "#F0F2F3",
//   blueBlack: "#0C0D34",
// };

export const theme: BaseTheme = createTheme({
  colors: {
    primary: "#2CB9b0",
    secondary: "#0C0D34",

    text: "rgba(12,13,52,0.5)",
    white: "white",
    grey: "rgba(12, 13, 52, 0.05)",
    darkGrey: "#8A8D90",
    lightGrey: "#F3F0EF",
    background: "#0C0D34",
    danger: "#FF0058",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 24,
    xl: 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
    },
    button: {
      fontSize: 16,
      fontFamily: "SFProDisplay-Medium",
      color: "text",
    },
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme() as Theme;
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
export default theme;
