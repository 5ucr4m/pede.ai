import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { Button } from "native-base";

import Heading from "@components/Heading";
import Text from "@components/Text";

import { styles } from "./styles";
import PinInput from "@components/PinInput";
import { useAppDispatch } from "@src/hooks/hooks";
import { setData } from "@store/features/Auth/authSlice";

const ConfirmationScreen: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState("");

  const validateCode = () => {
    if (value.length < 6) {
      return;
    }

    if (value !== "123456") {
      setHasError(true);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(setData({ isAuthenticated: true }));
    }, 2000);
  };

  useEffect(() => {
    value.length === 6 && setHasError(false);
  }, [value]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Heading>Insira seu e-mail</Heading>
        <Text>Enviaremos um código de confirmação</Text>
        <PinInput
          value={value}
          setValue={setValue}
          cellCount={6}
          hasError={hasError}
        />
        <Button
          style={styles.button}
          onPress={validateCode}
          isDisabled={value.length < 6}
          isLoading={loading}
        >
          Enviar
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
