import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sm: {
    fontFamily: "Nunito_400Regular",
    fontSize: 10,
  },
  md: {
    fontFamily: "Nunito_400Regular",
    fontSize: 12,
  },
  lg: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
  },
  xl: {
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
  },
  xxl: {
    fontFamily: "Nunito_400Regular",
    fontSize: 20,
  },
  xxxl: {
    fontFamily: "Nunito_400Regular",
    fontSize: 24,
  },
});

export const getFontColorStyle = (white?: boolean) => {
  return {
    color: white ? "#fff" : "#333",
  };
};
