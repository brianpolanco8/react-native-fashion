import { useTheme } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Text, Theme } from "./Theme";

const { width } = Dimensions.get("window");

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({ variant, label, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    // eslint-disable-next-line no-nested-ternary
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.grey;

  const color = variant === "primary" ? "white" : "secondary";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" color={color}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
    textAlign: "center",
  },
});
