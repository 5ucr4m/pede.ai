import React from "react";
import { Flex, ScrollView } from "native-base";

import Text from "@components/Text";

import { styles } from "./styles";
import { ppData } from "./data/pp";
import { SafeAreaView } from "react-native";

const PrivacyPolicyScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Flex style={styles.header}>
        <Text variant="xxxl">Política de Privacidade</Text>
      </Flex>
      <ScrollView style={styles.content}>
        <Text variant="lg">{ppData}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicyScreen;
