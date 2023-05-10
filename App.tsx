import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <SafeAreaView style={styles.container}>
          <Text>Font loaded</Text>
          <StatusBar style="auto" />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <Text>loading fonts</Text>
          <StatusBar style="auto" />
        </SafeAreaView>
      )}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
