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
import { Provider } from "react-redux";
import { store } from "@store/store";

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
      <Provider store={store}>
        <StatusBar backgroundColor="transparent" translucent />
        <Routes />
      </Provider>
    </NativeBaseProvider>
  );
}
