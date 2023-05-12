import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type IProps = {};

const Input: React.FC<IProps & TextInputProps> = ({ ...props }) => {
  return <TextInput style={styles.input} {...props} />;
};

export default Input;
