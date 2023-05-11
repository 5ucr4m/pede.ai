import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

type IProps = {};

const Input: React.FC<IProps> = () => {
  return <TextInput style={styles.input} />;
};

export default Input;
