import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CategoryGridTile = (props) => {
  let TochableComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TochableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TochableComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TochableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 25, // for android ripple effect ntivefeedbck
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible", // for android ripple effect ntivefeedbck
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.27,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    padding: 20,
    justifyContent: "flex-end", // headings at bottom
    alignItems: "flex-end", // right bottom
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
    //color: "white",
  },
});

export default CategoryGridTile;
