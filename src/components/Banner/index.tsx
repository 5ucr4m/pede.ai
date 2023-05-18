import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Center, Flex, Image } from "native-base";

import Text from "@components/Text";
import Heading from "@components/Heading";

import DefaultImg from "@assets/images/logo-white.png";
import { useAppSelector } from "@src/hooks/hooks";

const Banner: React.FC = () => {
  const { name_company, time_delivery, logo, banner } = useAppSelector(
    (store) => store.store
  );
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        {banner ? (
          <Image
            source={{ uri: banner }}
            alt="logo"
            resizeMode="contain"
            style={styles.profileImage}
          />
        ) : null}
      </View>
      <Center style={styles.profile}>
        <Flex style={styles.profileImageWrapper}>
          <Image
            source={!logo ? DefaultImg : { uri: logo }}
            alt="logo"
            resizeMode="contain"
            style={styles.profileImage}
          />
        </Flex>
        <Heading>{name_company}</Heading>
        <Text variant="sm">{time_delivery}</Text>
      </Center>
    </View>
  );
};

export default Banner;
