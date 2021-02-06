import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const SubMeal = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.ingredients}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SubMeal;
