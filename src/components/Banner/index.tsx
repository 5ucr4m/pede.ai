import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Center, Flex, Image } from "native-base";

import Text from "@components/Text";
import Heading from "@components/Heading";

import Img from "@assets/images/logo-white.png";

const Banner: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}></View>
      <Center style={styles.profile}>
        <Flex style={styles.profileImageWrapper}>
          <Image
            source={Img}
            alt="logo"
            resizeMode="contain"
            style={styles.profileImage}
          />
        </Flex>
        <Heading>Loja do pede.ai</Heading>
        <Text variant="sm">50-60 min</Text>
      </Center>
    </View>
  );
};

export default Banner;
