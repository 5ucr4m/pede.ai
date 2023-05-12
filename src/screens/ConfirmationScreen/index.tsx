import React from "react";
import { View, SafeAreaView } from "react-native";
import { Button } from "native-base";

import Heading from "@components/Heading";
import Text from "@components/Text";

import { styles } from "./styles";
import PinInput from "@components/PinInput";

const ConfirmationScreen: React.FC = () => {
  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Heading>Insira seu e-mail</Heading>
        <Text>Enviaremos um código de confirmação</Text>
        <PinInput value={value} setValue={setValue} cellCount={6} />
        <Button style={styles.button} onPress={() => {}}>
          Enviar
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
