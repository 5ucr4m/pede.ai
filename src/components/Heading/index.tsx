import React from "react";
import { Text, TextProps } from "react-native";
import { styles } from "./style";

type IProps = TextProps & {
  children: React.ReactNode;
  variant?: keyof typeof styles;
  white?: boolean;
};

const Heading: React.FC<IProps> = ({
  children,
  variant = "lg",
  style,
  ...props
}) => {
  return (
    <Text style={[styles[variant], style]} {...props}>
      {children}
    </Text>
  );
};

export default Heading;
