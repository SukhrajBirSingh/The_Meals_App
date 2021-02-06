import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import SubMeal from "../components/SubMeal";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const renderSubMealDetail = (itemData) => {
    return (
      <SubMeal
        title={itemData.item.title}
        ingredients={itemData.item.ingredients}
      />
    );
  };

  const sCatId = props.navigation.getParam("subCatId");

  const subDisplayedMeals = MEALS.filter(
    (subMeal) => subMeal.categoryIds.indexOf(sCatId) >= 0
  );
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
      <FlatList
        data={subDisplayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderSubMealDetail}
        //style={{ width: "100%", padding: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
