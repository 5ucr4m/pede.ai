import React from "react";
import { Button, Icon, Text } from "native-base";
import { ImageBackground, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Heading from "@components/Heading";

import Background from "@assets/images/bg.png";
import WelcomeImg from "@assets/images/welcome.png";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IPublicRoutesProps } from "@src/routes/public.routes";

export const WelcomeScreen: React.FC = () => {
  const navigate = useNavigation<IPublicRoutesProps>();

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
            onPress={() => navigate.push("email")}
          >
            Entrar com e-mail
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
