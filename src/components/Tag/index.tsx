import React from "react";
import { useToken } from "native-base";
import { View } from "react-native";

import Text from "@components/Text";
import { styles } from "./styles";

type IProps = {
  isVisible?: boolean;
  text: string;
  type: "newProduct" | "discount";
};

const Tag: React.FC<IProps> = ({ text, type, isVisible = true }) => {
  const [newProduct, discount] = useToken("brandColors", ["tag", "primary"]);
  const typeMap = {
    newProduct,
    discount,
  };

  if (!isVisible) return null;

  return (
    <View style={[styles.tag, { backgroundColor: typeMap[type] }]}>
      <Text white>{text}</Text>
    </View>
  );
};

export default Tag;
