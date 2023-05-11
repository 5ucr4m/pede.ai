import React from "react";
import { Text as RNText } from "react-native";

import { styles } from "./style";

type IProps = {
  children: React.ReactNode;
  variant?: keyof typeof styles;
};

const Text: React.FC<IProps> = ({ children, variant = "md" }) => {
  return <RNText style={styles[variant]}>{children}</RNText>;
};

export default Text;
