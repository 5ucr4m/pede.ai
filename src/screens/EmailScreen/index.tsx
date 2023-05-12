import React from "react";
import { View } from "react-native";
import { Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { IPublicRoutesProps } from "@src/routes/public.routes";

import Heading from "@components/Heading";
import Text from "@components/Text";
import Input from "@components/Input";

import { styles } from "./styles";

const EmailScreen: React.FC = () => {
  const navigate = useNavigation<IPublicRoutesProps>();

  return (
    <SafeAreaView style={styles.container}>
      <Heading>Insira seu e-mail</Heading>
      <Text>Enviaremos um código de confirmação</Text>
      <View style={styles.inputWrapper}>
        <MaterialCommunityIcons
          name="email-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Input autoFocus keyboardType="email-address" />
      </View>
      <Button
        style={styles.button}
        onPress={() => navigate.push("confirmation")}
      >
        Solicitar código
      </Button>
    </SafeAreaView>
  );
};

export default EmailScreen;
