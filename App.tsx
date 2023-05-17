import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@store/store";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { THEME } from "./src/theme";
import Routes from "@src/routes";
import { Provider } from "react-redux";

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
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor="transparent" translucent />
          <Routes />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
