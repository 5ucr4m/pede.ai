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
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Nunito_600SemiBold",
      },
      defaultProps: {
        fontFamily: "Nunito_600SemiBold",
      },
      variants: {
        h1: {
          fontSize: 16,
        },
        h2: {
          fontSize: 14,
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 8,
      },
      defaultProps: {},
      variants: {
        solid: {
          bg: "primary",
          _text: {
            color: "#fff",
            fontFamily: "Nunito_700Bold",
          },
        },
      },
    },
  },
});
