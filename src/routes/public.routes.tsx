import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import WelcomeScreen from "@screens/WelcomeScreen";
import EmailScreen from "@screens/EmailScreen";
import ConfirmationScreen from "@screens/ConfirmationScreen";

type IPublicRoutes = {
  welcome: undefined;
  email: undefined;
  confirmation: undefined;
};

export type IPublicRoutesProps = NativeStackNavigationProp<IPublicRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<IPublicRoutes>();

const PublicRoutes: React.FC = () => {
  return (
    <Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="welcome" component={WelcomeScreen} />
      <Screen name="email" component={EmailScreen} />
      <Screen name="confirmation" component={ConfirmationScreen} />
    </Navigator>
  );
};

export default PublicRoutes;
