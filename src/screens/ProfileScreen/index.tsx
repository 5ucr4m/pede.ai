import React from "react";
import { ImageBackground } from "react-native";
import { Box, Center, Flex, Image, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Text from "@components/Text";
import MenuItem from "@components/MenuItem";

import ImageProfileBG from "@assets/images/quadroPerfil.png";
import ImageProfile from "@assets/images/perfilPadrao.png";

import { styles } from "./styles";

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Center>
        <ImageBackground
          source={ImageProfile}
          resizeMode="contain"
          style={{ width: 80 }}
        >
          <Image
            source={ImageProfileBG}
            resizeMode="contain"
            alt="Logo"
            style={{ width: 80 }}
          />
        </ImageBackground>
        <Text variant="lg">5ucr4m@gmail.com</Text>
      </Center>
      <VStack marginTop={30} mx={4}>
        <MenuItem
          name="Termos e condições"
          icon={
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              size={24}
              color="#333"
            />
          }
        />
        <MenuItem
          name="Política de privacidade"
          icon={
            <MaterialCommunityIcons
              name="shield-alert-outline"
              size={24}
              color="black"
            />
          }
        />
      </VStack>
      <Box height={1} backgroundColor={"background"} minHeight={5} />
      <Flex mx={4} borderBottomWidth={1} borderBottomColor="background">
        <MenuItem
          name="Sair"
          icon={<MaterialIcons name="logout" size={24} color="black" />}
        />
      </Flex>
    </SafeAreaView>
  );
};

export default ProfileScreen;
