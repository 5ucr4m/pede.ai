import React, { useEffect } from "react";
import { View } from "react-native";
import { Button, Flex } from "native-base";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPublicRoutesProps } from "@src/routes/public.routes";

import Heading from "@components/Heading";
import Text from "@components/Text";
import Input from "@components/Input";

import { styles } from "./styles";
import { useEnviarTokenMutation } from "@store/services/authApi";
import { emailValidatorSchema } from "@src/validators/emailScreen.validator";

interface IFormInput {
  email: string;
}

const EmailScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors: validationError },
    setFocus,
    setError,
  } = useForm<IFormInput>({
    resolver: yupResolver(emailValidatorSchema),
  });

  const navigate = useNavigation<IPublicRoutesProps>();
  const [enviarToken, { isLoading, error, isSuccess }] =
    useEnviarTokenMutation();

  const onSubmit: SubmitHandler<IFormInput> = ({ email }) => {
    enviarToken(email);
  };

  useEffect(() => {
    setFocus("email");
  }, []);

  useEffect(() => {
    isSuccess && navigate.push("confirmation");
  }, [isSuccess]);

  useEffect(() => {
    !!error && setError("email", { message: "E-mail não cadastrado!" });
  }, [error]);

  return (
    <SafeAreaView style={styles.container}>
      <Heading>Insira seu e-mail</Heading>
      <Text>Enviaremos um código de confirmação</Text>
      <View style={styles.inputWrapper}>
        <MaterialCommunityIcons
          name="email-outline"
          size={24}
          color="black"
          style={[
            styles.icon,
            validationError.email?.message ? styles.hasError : null,
          ]}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              hasError={validationError.email?.message ? true : false}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
          )}
          name="email"
        />
      </View>
      {validationError.email?.message ? (
        <Flex alignItems="flex-end" mr={4}>
          <Text style={styles.hasError}>{validationError.email?.message}</Text>
        </Flex>
      ) : null}
      <Button
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      >
        Solicitar código
      </Button>
    </SafeAreaView>
  );
};

export default EmailScreen;
