import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    primary: "#Ff3333",
    textColor: "#333",
    tag: "#00B333",
    background: "#F1F2F4",
  },
  fonts: {
    heading: "Nunito_600SemiBold",
    body: "Nunito_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  iconSize: {
    md: 24,
  },
});
