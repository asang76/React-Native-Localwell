import React, { FC } from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";

type Props = {
  label: string;
  value: string;
  valueTone?: "normal" | "good";
};

export const PriceRow: FC<Props> = ({ label, value, valueTone = "normal" }) => {
  return (
    <View style={$row}>
      <Text style={$label}>{label}</Text>
      <Text style={[$value, valueTone === "good" && $goodValue]}>{value}</Text>
    </View>
  );
};

const $row: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 5,
};

const $label: TextStyle = {
  color: "#666666",
  fontSize: 12,
  fontWeight: "600",
};

const $value: TextStyle = {
  color: "#111111",
  fontSize: 12,
  fontWeight: "800",
};

const $goodValue: TextStyle = {
  color: "#108858",
};
