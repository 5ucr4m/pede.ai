import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { selectAuthData } from "@store/features/Auth/authSlice";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  const { token } = useSelector(selectAuthData);

  return (
    <NavigationContainer>
      <Navigator initialRouteName={!token ? "public" : "private"}>
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
