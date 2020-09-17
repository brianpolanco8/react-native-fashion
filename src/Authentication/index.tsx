import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import { theme } from "../components";
import { Routes } from "../components/Navigation";

import Onboarding from "./Onboarding";
import Welcome from "./Welcome/Welcome";
import { Login } from "./Login";

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
        <AuthenticationStack.Screen name="Welcome" component={Welcome} />
        <AuthenticationStack.Screen name="Login" component={Login} />
      </AuthenticationStack.Navigator>
    </ThemeProvider>
  );
};

export default AuthenticationNavigator;
