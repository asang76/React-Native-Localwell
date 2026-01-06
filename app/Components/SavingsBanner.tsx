import React, { FC } from "react";
import { View, Text, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Image } from "expo-image";

type Props = {
  text: string;
  background: number; // require(...)
};

export const SavingsBanner: FC<Props> = ({ text, background }) => {
  return (
    <View style={$root}>
      <Image source={background} style={$bg} contentFit="cover" />
      <Text style={$text}>{text}</Text>
    </View>
  );
};

const $root: ViewStyle = {
  marginTop: 12,
  borderRadius: 10,
  paddingHorizontal: 12,
  paddingVertical: 10,
  overflow: "hidden",
  minHeight: 44,
  justifyContent: "center",
  backgroundColor: "#3040C8",
};

const $bg: ImageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "130%",
  height: 68,
};

const $text: TextStyle = {
  color: "#FFFFFF",
  fontSize: 12,
  fontWeight: "800",
  textShadowColor: "rgba(0,0,0,0.25)",
  textShadowOffset: { width: 0, height: 1 },
  textShadowRadius: 2,
};
