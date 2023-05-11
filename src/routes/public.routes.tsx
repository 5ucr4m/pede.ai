import React from "react";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "@screens/WelcomeScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const PublicRoutes: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", height: 300 }}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Perfil" component={WelcomeScreen} />
      </Navigator>
    </SafeAreaView>
  );
};

export default PublicRoutes;
