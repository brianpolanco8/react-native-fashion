import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

interface Props {
  label: string;
}

const Checkbox = ({ label }: Props) => {
  const [checked, setChecked] = useState(false);
  return (
    <RectButton
      onPress={() => setChecked((c) => !c)}
      style={{ justifyContent: "center" }}
    >
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
          <Icon name="check" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;

const styles = StyleSheet.create({});
