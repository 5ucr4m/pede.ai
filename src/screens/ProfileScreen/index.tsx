import React from "react";
import { ImageBackground } from "react-native";
import { Box, Center, Flex, Image, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Text from "@components/Text";
import MenuItem from "@components/MenuItem";

import ImageProfileBG from "@assets/images/quadroPerfil.png";
import ImageProfile from "@assets/images/perfilPadrao.png";

import { IPrivateRoutesProps } from "@src/routes/private.routes";

import { styles } from "./styles";
import { useAppDispatch } from "@src/hooks/hooks";
import { logout } from "@store/features/Auth/authSlice";

const ProfileScreen: React.FC = () => {
  const { navigate } = useNavigation<IPrivateRoutesProps>();
  const dispatch = useAppDispatch();

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
          onClick={() => navigate("terms_and_conditions")}
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
          onClick={() => navigate("privacy_policy")}
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
          onClick={() => dispatch(logout())}
          name="Sair"
          icon={<MaterialIcons name="logout" size={24} color="black" />}
        />
      </Flex>
    </SafeAreaView>
  );
};

export default ProfileScreen;
