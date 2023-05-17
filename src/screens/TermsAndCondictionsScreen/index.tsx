import React from "react";
import { WebView } from "react-native-webview";
import { styles } from "./styles";

const TermsAndCondictionsScreen: React.FC = () => {
  return (
    <WebView
      style={styles.container}
      source={{
        uri: "https://painel.pede.ai/page-termos-e-condicoes-estabelecimento",
      }}
    />
  );
};

export default TermsAndCondictionsScreen;
