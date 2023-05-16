import React, { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type IProps = {};

const Input = forwardRef<TextInput, IProps & TextInputProps>((props, ref) => {
  return <TextInput ref={ref} style={styles.input} {...props} />;
});

export default Input;
