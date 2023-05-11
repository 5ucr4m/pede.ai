import React from "react";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import HomeScreen from "@screens/HomeScreen";
import ProfileScreen from "@screens/ProfileScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const PrivateRoutes: React.FC = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, height: 300, backgroundColor: "#Ff3333" }}
      edges={["bottom"]}
    >
      <Navigator
        initialRouteName="Cardápio"
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
          name="Cardápio"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="isv" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </SafeAreaView>
  );
};

export default PrivateRoutes;
