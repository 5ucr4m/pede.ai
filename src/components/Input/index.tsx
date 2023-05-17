import React, { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type IProps = {
  hasError?: boolean;
};

const Input = forwardRef<TextInput, IProps & TextInputProps>(
  ({ hasError, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.input, !!hasError && styles.hasError]}
        {...props}
      />
    );
  }
);

export default Input;
