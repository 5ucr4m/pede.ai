import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import TabRoutes from "./tabs.routes";

import PrivacyPolicyScreen from "@screens/PrivacyPolicyScreen";
import TermsAndCondictionsScreen from "@screens/TermsAndCondictionsScreen";
import GoBackButtom from "@components/GoBackButton";

type StackRoutes = {
  tabs: undefined;
  privacy_policy: undefined;
  terms_and_conditions: undefined;
};

export type IPrivateRoutesProps = NativeStackNavigationProp<StackRoutes>;

const Stack = createNativeStackNavigator<StackRoutes>();

const PrivateRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="privacy_policy"
        component={PrivacyPolicyScreen}
        options={{
          headerTitle: "",
          headerBackVisible: false,
          headerBackTitle: "",
          headerShadowVisible: false,
          headerLeft: GoBackButtom,
        }}
      />
      <Stack.Screen
        name="terms_and_conditions"
        component={TermsAndCondictionsScreen}
        options={{
          headerTitle: "",
          headerBackVisible: false,
          headerBackTitle: "",
          headerShadowVisible: false,
          headerLeft: GoBackButtom,
        }}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
