import { useTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box } from "./Theme";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  backgroundImage: number;
}

export const assets = [require("./assets/patterns/bg-pattern.png")];

const { width } = Dimensions.get("window");
const aspectRatio = 3.47 / 5.21;
const height = width * aspectRatio;

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height: height,
              ...StyleSheet.absoluteFillObject,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>

      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          //   style={{ ...StyleSheet.absoluteFillObject }}
          backgroundColor="white"
          borderTopLeftRadius={0}
          borderRadius="xl"
          flex={1}
        >
          {children}
        </Box>
        <Box>
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </Box>
  );
};

Container.defaultProps = {
  backgroundImage: require("./assets/patterns/bg-pattern.png"),
};

export default Container;
