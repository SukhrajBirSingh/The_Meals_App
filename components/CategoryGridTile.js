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
    <LinearGradient
      style={styles.gridItem}
      colors={[props.color, "#f3bad6"]}
      start={{ x: 0, y: 0 }}
      end={{ x: -2, y: 0.5 }}
    >
      <View style={{ flex: 1 }}>
        <TochableComp style={{ flex: 1 }} onPress={props.onSelect}>
          <View style={{ ...styles.container }}>
            <Text style={styles.title} numberOfLines={2}>
              {props.title}
            </Text>
          </View>
        </TochableComp>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 25, // for android ripple effect ntivefeedbck
    overflow: "hidden", // for android ripple effect ntivefeedbck
  },
  container: {
    flex: 1,
    borderRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.26,
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
