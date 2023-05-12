import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
  },
  content: { padding: 16 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 40 },
  cell: {
    width: 30,
    height: 45,
    borderRadius: 4,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#666",
    textAlign: "center",
    marginHorizontal: 4,
  },
  focusCell: {
    borderColor: "#000",
  },
  button: {
    marginTop: 40,
  },
});
