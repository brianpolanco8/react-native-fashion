/* eslint-disable no-nested-ternary */
import React from "react";
import {
  StyleSheet,

  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, useTheme } from "../Theme";

interface Props extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}


const TextInput = ({ icon, touched, error, ...props }: Props) => {
  const reColor = !touched ? "text" : error ? "danger" : "primary";
  const theme = useTheme();
  const SIZE = theme.borderRadii.m * 2;
  const color = theme.colors[reColor];
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={48}
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      padding="s"
    >
      <Box padding="s">
        <Icon name={icon} {...{ color }} size={16} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          backgroundColor={!error ? "primary" : "danger"}
          justifyContent="center"
          alignItems="center"
        >
          <Icon name={!error ? "check" : "x"} color="white" size={16} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;


