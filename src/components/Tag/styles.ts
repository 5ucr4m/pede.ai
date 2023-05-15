import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 160,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tags: {
    flexDirection: "row",
    marginTop: 5,
  },
  tag: {
    paddingHorizontal: 15,
    paddingVertical: 1,
    marginRight: 5,
    borderRadius: 6,
  },
  descriptionContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  description: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: "auto",
    alignItems: "baseline",
  },
  size: {
    marginRight: 5,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
  priceWithDiscount: {
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  discountedPrice: {
    fontWeight: "bold",
    fontSize: 14,
    color: "red",
  },
});
