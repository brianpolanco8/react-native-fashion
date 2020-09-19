import React from "react";
import { StyleSheet, View } from "react-native";

import SocialLogin from "../components/SocialLogin";

import {
  Text,
  Container,
  Button,
  Box,
  TextInput,
  Checkbox,
} from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const emailValidator = (email: string) => {
  // eslint-disable-next-line max-len
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const passwordValidator = (password: string) => password.length >= 6;

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
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your password"
          validator={passwordValidator}
        />

        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember me" />
          <Button variant="transparent" onPress={() => {}}>
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>

        <Box alignItems="center" marginTop="m">
          <Button
            label="Log into your account"
            variant="primary"
            onPress={() => true}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
