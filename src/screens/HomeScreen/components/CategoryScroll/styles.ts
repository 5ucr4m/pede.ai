import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  caterogyWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  category: {
    height: 40,
    marginHorizontal: 6,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f00",
  },
  categoryText: {
    color: "#f00",
    fontSize: 16,
  },
  categoryActive: {
    height: 40,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f00",
    borderWidth: 1,
    borderColor: "#f00",
  },
  categoryTextActive: {
    color: "#fff",
    fontSize: 16,
  },
});
