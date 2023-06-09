import React from "react";
import { Flex, HStack, useToken } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "@components/Text";

import { styles } from "./styles";

type IProps = {
  name: string;
  icon?: JSX.Element;
  onClick?: () => void;
};

const MenuItem: React.FC<IProps> = ({ icon: Icon, name, onClick }) => {
  const [menuItemIcon] = useToken("brandColors", ["menuItemIcon"]);
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <HStack
        space={3}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        {Icon}
        <Flex flex={1}>
          <Text variant="xl">{name}</Text>
        </Flex>
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color={menuItemIcon}
        />
      </HStack>
    </TouchableOpacity>
  );
};

export default MenuItem;
