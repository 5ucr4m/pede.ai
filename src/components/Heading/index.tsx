import React from "react";
import { Text } from "react-native";
import { styles } from "./style";

type IProps = {
  children: React.ReactNode;
  variant?: keyof typeof styles;
};

const Heading: React.FC<IProps> = ({ children, variant = "lg" }) => {
  return <Text style={styles[variant]}>{children}</Text>;
};

export default Heading;
