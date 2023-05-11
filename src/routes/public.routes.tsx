import React from "react";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "@screens/WelcomeScreen";
import EmailScreen from "@screens/EmailScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const PublicRoutes: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Email"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="Email" component={EmailScreen} />
    </Navigator>
  );
};

export default PublicRoutes;
