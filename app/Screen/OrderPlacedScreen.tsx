import React, { FC } from "react";
import {
  View,
  Text,
  ScrollView,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { OrderBottomButtons } from "../Components/orderButtons";
import { PriceRow } from "../Components/PriceRow";
import { SavingsBanner } from "../Components/SavingsBanner";

export const OrderPlacedScreen: FC = () => {
  const Tick = require("../../assets/images/sucessfullTick.png");
  const PrescriptionDemo = require("../../assets/images/prescriptiondemo.png");
  const DoloImg = require("../../assets/images/tabletImage.png");
  const DiscountBg = require("../../assets/images/discountBg.png");

  return (
    <ScrollView
      style={$container}
      contentContainerStyle={$content}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        colors={["#0A8F5B", "#18A56C", "#BFF5D0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={$hero}
      >
        <Image source={Tick} style={$tick} contentFit="contain" />

        <Text style={$greatJob}>Great Job</Text>
        <Text style={$heroTitle}>Your order no. 122334455 is{"\n"}placed!</Text>

        <Text style={$heroSubtitle}>
          We will notify you once this order gets{"\n"}confirmed and send your
          updates thereafter
        </Text>

        <View style={$rxCard}>
          <Image
            source={PrescriptionDemo}
            style={$rxImage}
            contentFit="contain"
          />
          <Text style={$rxText}>
            We're reviewing your prescription now to confirm your order
          </Text>
        </View>
      </LinearGradient>

      <View style={$body}>
        <Text style={$sectionTitle}>Delivering to</Text>
        <Text style={$deliverTitle}>Home</Text>

        <Text style={$addressText}>
          Singhal General store, Varun Path, Varun{"\n"}Nagar, JAIPUR,
          RAJASTHAN, 302020, India
        </Text>

        <Text style={$etaText}>
          Expected delivery date : 25 Dec ’25 - 27 Dec ’25
        </Text>

        <View style={$divider} />

        <Text style={$sectionTitle}>Order Summary</Text>
        <Text style={$subHeading}>Items</Text>

        <View style={$itemRow}>
          <View style={$itemThumbWrap}>
            <Image source={DoloImg} style={$itemThumb} contentFit="contain" />
          </View>

          <View style={$itemInfo}>
            <Text style={$itemName}>Dolo 500 Tablet</Text>
            <Text style={$itemSub}>Pain killer</Text>
          </View>
        </View>

        <Text style={$moreItems}>+4 More items</Text>

        <View style={$divider} />

        <PriceRow label="Item total (MRP)" value="₹4274.43" />
        <PriceRow label="Handling charges" value="₹45" />
        <PriceRow label="Total Discount:" value="-₹50" valueTone="good" />
        <PriceRow label="Coupon Code" value="-₹70" valueTone="good" />
        <PriceRow label="Medcart Credits" value="-₹70" valueTone="good" />
        <PriceRow label="Shipping fee" value="₹12" />

        <View style={$divider} />

        <View style={$amountRow}>
          <Text style={$sectionTitle}>Amount paid</Text>
          <Text style={$amountPaid}>₹1,999.00*</Text>
        </View>

        <SavingsBanner
          background={DiscountBg}
          text="🎉 You saved ₹577.00 on this order!"
        />

        <Text style={$finePrint}>
          *Prices shown on the page are indicative, inclusive of all{"\n"}
          taxes and may slightly vary once the fin…
          <Text style={$seeMore}> See more</Text>
        </Text>

        <View style={$divider} />

        <Text style={$sectionTitle}>Paid via UPI</Text>
        <Text style={$paidLine}>From : Slice cc (XX9395)</Text>
        <Text style={$mutedLine}>Txn ID : 123456789012345</Text>
        <Text style={$mutedLine}>Date : 29 Dec ’25 8:10 PM</Text>

        <OrderBottomButtons/>
      </View>
    </ScrollView>
  );
};

export default OrderPlacedScreen;

const $container: ViewStyle = { flex: 1, flexBasis: "100%", marginBottom: 21 };
const $content: ViewStyle = { paddingBottom: 24 };

const $hero: ViewStyle = {
  paddingHorizontal: 18,
  paddingTop: 20,
  paddingBottom: 22,
};

const $tick: ImageStyle = {
  width: 150,
  height: 150,
  alignSelf: "center",
  marginTop: 6,
};

const $greatJob: TextStyle = {
  marginTop: 10,
  textAlign: "center",
  color: "#FFFFFF",
  fontSize: 14,
  fontWeight: "600",
  opacity: 0.95,
};

const $heroTitle: TextStyle = {
  marginTop: 10,
  textAlign: "center",
  color: "#FFFFFF",
  fontSize: 20,
  fontWeight: "800",
  lineHeight: 26,
};

const $heroSubtitle: TextStyle = {
  marginTop: 10,
  textAlign: "center",
  color: "rgba(255,255,255,0.92)",
  fontSize: 13,
  fontWeight: "500",
  lineHeight: 18,
};

const $rxCard: ViewStyle = {
  marginTop: 16,
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  padding: 14,
  alignItems: "center",
};

const $rxImage: ImageStyle = { width: 110, height: 120 };

const $rxText: TextStyle = {
  marginTop: 12,
  textAlign: "center",
  color: "#111111",
  fontSize: 13,
  fontWeight: "600",
  lineHeight: 18,
};

const $body: ViewStyle = {
  backgroundColor: "#FFFFFF",
  paddingHorizontal: 18,
  paddingTop: 16,
  paddingBottom: 18,
  borderBottomLeftRadius: 18,
  borderBottomRightRadius: 18,
};

const $sectionTitle: TextStyle = {
  color: "#111111",
  fontSize: 14,
  fontWeight: "800",
};
const $deliverTitle: TextStyle = {
  marginTop: 10,
  color: "#111111",
  fontSize: 14,
  fontWeight: "700",
};

const $addressText: TextStyle = {
  marginTop: 8,
  color: "#6B6B6B",
  fontSize: 12,
  fontWeight: "500",
  lineHeight: 16,
};

const $etaText: TextStyle = {
  marginTop: 10,
  color: "#E0652B",
  fontSize: 12,
  fontWeight: "700",
};
const $divider: ViewStyle = {
  marginVertical: 16,
  height: 1,
  backgroundColor: "#E7E7E7",
};
const $subHeading: TextStyle = {
  marginTop: 10,
  color: "#444444",
  fontSize: 12,
  fontWeight: "700",
};

const $itemRow: ViewStyle = {
  marginTop: 12,
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
};

const $itemThumbWrap: ViewStyle = {
  width: 44,
  height: 44,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#EEEEEE",
  backgroundColor: "#FAFAFA",
  justifyContent: "center",
  alignItems: "center",
};

const $itemThumb: ImageStyle = { width: 34, height: 34 };
const $itemInfo: ViewStyle = { flex: 1 };

const $itemName: TextStyle = {
  color: "#111111",
  fontSize: 13,
  fontWeight: "800",
};
const $itemSub: TextStyle = {
  marginTop: 2,
  color: "#6B6B6B",
  fontSize: 12,
  fontWeight: "600",
};
const $moreItems: TextStyle = {
  marginTop: 10,
  color: "#6B6B6B",
  fontSize: 12,
  fontWeight: "600",
};

const $amountRow: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const $amountPaid: TextStyle = {
  color: "#111111",
  fontSize: 16,
  fontWeight: "900",
};

const $finePrint: TextStyle = {
  marginTop: 10,
  color: "#7A7A7A",
  fontSize: 11,
  fontWeight: "600",
  lineHeight: 15,
};

const $seeMore: TextStyle = { color: "#7C3AED", fontWeight: "800" };

const $paidLine: TextStyle = {
  marginTop: 10,
  color: "#111111",
  fontSize: 12,
  fontWeight: "700",
};

const $mutedLine: TextStyle = {
  marginTop: 6,
  color: "#6B6B6B",
  fontSize: 12,
  fontWeight: "600",
};
