/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import theme, { Box } from "../Theme";
import { Feather as Icon } from "@expo/vector-icons";

interface Props extends RNTextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: Props) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(null);
  const reColor: keyof typeof theme.colors =
    state === Pristine ? "darkGrey" : state === Valid ? "primary" : "danger";

  const color = theme.colors[reColor];
  const onChangeText = (text) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };
  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

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
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          backgroundColor={state === Valid ? "primary" : "danger"}
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
