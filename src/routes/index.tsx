import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";
import { useAppSelector } from "@src/hooks/hooks";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <Navigator>
        {isAuthenticated ? (
          <Screen
            name="private"
            component={PrivateRoutes}
            options={{ headerShown: false }}
          />
        ) : (
          <Screen
            name="public"
            component={PublicRoutes}
            options={{ headerShown: false }}
          />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
