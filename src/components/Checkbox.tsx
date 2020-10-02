import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box } from "./Theme";

interface Props {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: Props) => {
  return (
    <RectButton onPress={() => onChange()} style={{ justifyContent: "center" }}>
      <Box flexDirection="row" justifyContent="center" alignItems="center">
        <Box
          marginRight="m"
          alignItems="center"
          justifyContent="center"
          height={20}
          width={20}
          borderRadius="s"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}
        >
          {checked ? <Icon name="check" /> : null}
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;

const styles = StyleSheet.create({});
