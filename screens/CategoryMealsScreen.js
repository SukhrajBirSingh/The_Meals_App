import React from "react";
import { View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
//import MealDetailScreen from "./MealDetailScreen";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  if (displayedMeals.length === 0) {
    return (
      <View style={StyleSheet.content}>
        <DefaultText>No meals found, please check your filters</DefaultText>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
//
CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  // tell us which category is selected
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
