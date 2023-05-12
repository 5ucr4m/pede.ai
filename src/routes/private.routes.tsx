import React from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeScreen from "@screens/HomeScreen";
import ProfileScreen from "@screens/ProfileScreen";

import * as Icons from "./TabBarIcons";

type IPrivateRoutes = {
  cardapio: undefined;
  perfil: undefined;
};

export type IPrivateRoutesProps = BottomTabNavigationProp<IPrivateRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<IPrivateRoutes>();

const PrivateRoutes: React.FC = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, height: 300, backgroundColor: "#Ff3333" }}
      edges={["bottom"]}
    >
      <Navigator
        initialRouteName="cardapio"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#Ff3333",
            height: Platform.OS === "android" ? 60 : 70,
            paddingVertical: 10,
            paddingBottom: 10,
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <Screen
          name="cardapio"
          component={HomeScreen}
          options={{
            tabBarIcon: Icons.HomeIcon,
            tabBarLabel: "Cardápio",
          }}
        />
        <Screen
          name="perfil"
          component={ProfileScreen}
          options={{
            tabBarIcon: Icons.ProfileIcon,
            tabBarLabel: "Perfil",
          }}
        />
      </Navigator>
    </SafeAreaView>
  );
};

export default PrivateRoutes;
