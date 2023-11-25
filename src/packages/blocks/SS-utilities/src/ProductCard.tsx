import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle
} from "react-native";
import Scale from "../../../components/src/Scale";
import { COLORS } from "./Globals";
import FONTS from "./Fonts/Fonts";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  catalogueItem,
  topCatalogueItem
} from "../../catalogue/src/utils/types";
import { Image } from "./Image";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "./RootStackParamList";

type ProductCardProps = {
  // disabled as stylists are not included in MVP
  // productType: "service" | "stylist",
  product: catalogueItem["attributes"] | topCatalogueItem["attributes"];
  id: string;
  testID?: string;
  navigation:
    | NavigationProp<RootStackParamList, "HomePageScreen">
    | NavigationProp<RootStackParamList, "Catalogue">;
  containerStyle?: ViewStyle;
};

const ProductCard = ({
  product,
  id,
  navigation,
  containerStyle,
  testID
}: ProductCardProps) => {
  // Customizable Area Start
  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.productBox, containerStyle]}
      onPress={() =>
        navigation.navigate("CatalogueDetail", {
          id: id,
          pageTitle: product.title
          // disabled as stylists are not included in MVP
          // catalogueType: productType,
        } as any | never)
      }
    >
      <View style={styles.imageContainer}>
        {product &&
        product.images &&
        product.images.length &&
        product.images[0].url ? (
          <Image
            style={styles.productImage}
            source={{ uri: product.images[0].url }}
            resizeMode="cover"
          />
        ) : null}
      </View>
      <View style={styles.detailContent}>
        <Text numberOfLines={2} style={styles.productName}>
          {product.title}
        </Text>

        <View style={styles.priceDurationContainer}>

          <Text style={styles.detailTextSecondary}>
            {product.currency.symbol }
          </Text>

          <Text style={styles.detailTextSecondary}>
            { product.price.toFixed(2) }
          </Text>
          <View style={styles.priceDurationSeparator} />
          <Text style={styles.detailTextSecondary}>
            {product.duration + " mins"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  // Customizable Area End
};

const styles = StyleSheet.create({
  productBox: {
    width: "48%",
    marginBottom: Scale(20)
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 0.8,
    marginBottom: Scale(10)
  },
  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: 4
  },
  detailContent: {
    paddingVertical: Scale(10),

    justifyContent: "space-between",
    flex: 1
  },
  productName: {
    fontSize: Scale(14),
    lineHeight: Scale(24),
    color: COLORS.black,
    fontFamily: FONTS.Regular
  },
  priceDurationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Scale(2)
  },
  detailTextSecondary: {
    color: COLORS.gray,
    fontSize: Scale(12),
    lineHeight: Scale(14),
    fontFamily: FONTS.Regular
  },
  priceDurationSeparator: {
    width: 1,
    height: Scale(14),
    marginHorizontal: 8,
    backgroundColor: COLORS.lightGray2
  }
});

export default ProductCard;
