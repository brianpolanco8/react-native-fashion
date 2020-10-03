import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import { Box, Button, Text } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const { width, height } = Dimensions.get("window");

const picture = {
  src: require("../../../assets/images/Layer-3.png"),
  width: 2513,
  height: 3980,
};

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      {/* TOP PART */}
      <Box
        height={height * 0.55}
        backgroundColor="lightGrey"
        borderBottomRightRadius="xl"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>

      {/* BOTTOM PART */}
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          position="absolute"
          backgroundColor="lightGrey"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          flex={1}
          borderTopLeftRadius="xl"
          alignItems="center"
          justifyContent="space-evenly"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>

          <Button
            variant="primary"
            label="Have an account ? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button label="Join us, it’s Free" />
          <Button variant="transparent" label="Forgot password?" />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
