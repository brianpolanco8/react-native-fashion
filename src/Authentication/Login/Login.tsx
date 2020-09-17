import React from "react";
import { StyleSheet, View } from "react-native";

import SocialLogin from "../components/SocialLogin";

import { Text, Container, Button, Box } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => {}}>
          <Box flexDirection="row" alignItems="center">
            <Text variant="button" color="white">
              {" "}
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              {" "}
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <Text>Login Screen</Text>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
