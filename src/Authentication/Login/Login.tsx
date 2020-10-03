import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

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

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => { }}>
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
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
              <Box>
                <Box marginBottom="m">
                  <TextInput
                    icon="mail"
                    placeholder="Enter your email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    error={errors.email}
                    touched={touched.email}
                  />
                </Box>
                <TextInput
                  icon="lock"
                  placeholder="Enter your password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                />

                <Box flexDirection="row" justifyContent="space-between">
                  <Checkbox
                    label="Remember me"
                    checked={values.remember}
                    onChange={() => setFieldValue("remember", !values.remember)}
                  />
                  <Button variant="transparent" onPress={() => { }}>
                    <Text color="primary">Forgot password</Text>
                  </Button>
                </Box>

                <Box alignItems="center" marginTop="m">
                  <Button
                    label="Log into your account"
                    variant="primary"
                    onPress={handleSubmit}
                  />
                </Box>
              </Box>
            )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
