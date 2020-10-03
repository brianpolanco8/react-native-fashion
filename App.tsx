import { ThemeProvider } from "@shopify/restyle";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AuthenticationNavigator from "./src/Authentication";
import { LoadAssets } from "./src/components";
import { theme } from "./src/components/Theme";

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
    // <View>
    //   <Text>Hello</Text>
    // </View>
  );
}
