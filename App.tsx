import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { THEME } from "./src/theme";
import Routes from "@src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor="transparent" translucent />
      <Routes />
    </NativeBaseProvider>
  );
}
