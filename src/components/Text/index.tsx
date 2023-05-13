import React from "react";
import { Text as RNText, TextProps } from "react-native";

import { styles, getFontColorStyle } from "./style";

type IProps = TextProps & {
  children: React.ReactNode;
  variant?: keyof typeof styles;
  white?: boolean;
};

const Text: React.FC<IProps> = ({
  children,
  variant = "md",
  white,
  style,
  ...props
}) => {
  return (
    <RNText
      style={[styles[variant], getFontColorStyle(white), style]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
