import React, { FC } from "react";
import { View, Text, Pressable, ViewStyle, TextStyle } from "react-native";

type Props = {
  onExploreMore?: () => void;
  onTrackOrder?: () => void;
  exploreLabel?: string;
  trackLabel?: string;
};

export const OrderBottomButtons: FC<Props> = ({
  onExploreMore,
  onTrackOrder,
  exploreLabel = "Explore more",
  trackLabel = "Track Order",
}) => {
  return (
    <View style={$btnRow}>
      <Pressable onPress={onExploreMore} style={({ pressed }) => [$btnOutline, pressed && $btnPressed]}>
        <Text style={$btnOutlineText}>{exploreLabel}</Text>
      </Pressable>

      <Pressable onPress={onTrackOrder} style={({ pressed }) => [$btnPrimary, pressed && $btnPrimaryPressed]}>
        <Text style={$btnPrimaryText}>{trackLabel}</Text>
      </Pressable>
    </View>
  );
};

const $btnRow: ViewStyle = {
  marginTop: 14,
  flexDirection: "row",
  gap: 12,
};

const $btnOutline: ViewStyle = {
  flex: 1,
  height: 46,
  borderRadius: 10,
  borderWidth: 1.5,
  borderColor: "#9818A8",
  backgroundColor: "#FFFFFF",
  justifyContent: "center",
  alignItems: "center",
};

const $btnOutlineText: TextStyle = {
  color: "#9818A8",
  fontSize: 13,
  fontWeight: "800",
};

const $btnPrimary: ViewStyle = {
  flex: 1,
  height: 46,
  borderRadius: 10,
  backgroundColor: "#9818A8",
  justifyContent: "center",
  alignItems: "center",
};

const $btnPrimaryText: TextStyle = {
  color: "#FFFFFF",
  fontSize: 13,
  fontWeight: "800",
};

const $btnPressed: ViewStyle = { opacity: 0.85 };
const $btnPrimaryPressed: ViewStyle = { opacity: 0.9 };
