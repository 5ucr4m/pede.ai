import React from "react";
import { Button, Icon, Text } from "native-base";
import { ImageBackground, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Background from "@assets/images/bg.png";
import WelcomeImg from "@assets/images/welcome.png";

import { styles } from "./styles";
import Heading from "@components/Heading";

export const Welcome: React.FC = () => {
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Image source={WelcomeImg} style={styles.image} />
        <View style={styles.content}>
          <Heading>Bem vindo ao pede.ai</Heading>
          <Text fontSize="sm">Faça login para conferir nossas ofertas</Text>
          <Button
            style={styles.button}
            leftIcon={
              <Icon as={MaterialCommunityIcons} size={6} name="email-outline" />
            }
            onPress={() => {}}
          >
            Entrar com e-mail
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};
