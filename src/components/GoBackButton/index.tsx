import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import { TouchableOpacity } from "react-native";

const GoBackButton: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon as={MaterialIcons} name="arrow-back" size={8} color="primary" />
    </TouchableOpacity>
  );
};

export default GoBackButton;
