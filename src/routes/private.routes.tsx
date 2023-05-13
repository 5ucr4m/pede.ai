import React from "react";
import { Icon } from "native-base";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import PrivacyPolicyScreen from "@screens/PrivacyPolicyScreen";
import TabRoutes from "./tabs.routes";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

type StackRoutes = {
  tabs: undefined;
  privacy_policy: undefined;
};

export type IPrivateRoutesProps = NativeStackNavigationProp<StackRoutes>;

const Stack = createNativeStackNavigator<StackRoutes>();

const PrivateRoutes: React.FC = () => {
  const navigation = useNavigation<IPrivateRoutesProps>();

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
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                as={MaterialIcons}
                name="arrow-back"
                size={8}
                color="primary"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
