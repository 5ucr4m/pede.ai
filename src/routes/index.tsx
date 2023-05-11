import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="public">
        <Screen
          name="public"
          component={PublicRoutes}
          options={{ headerShown: false }}
        />
        <Screen
          name="private"
          component={PrivateRoutes}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
