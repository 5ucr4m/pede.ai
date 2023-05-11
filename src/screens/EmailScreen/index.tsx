import React from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Heading from "@components/Heading";

import { styles } from "./styles";
import Input from "@components/Input";

const EmailScreen: React.FC = () => {
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
        <Input />
      </View>
      <Button style={styles.button} onPress={() => {}}>
        Solicitar código
      </Button>
    </SafeAreaView>
  );
};

export default EmailScreen;
