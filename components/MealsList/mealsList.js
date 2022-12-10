import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "./mealItem";

function MealList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      ingredients: item.ingredients,
      id: item.id,
    };
    return (
      <MealItem
        title={mealItemProps.title}
        imageUrl={mealItemProps.imageUrl}
        affordability={mealItemProps.affordability}
        complexity={mealItemProps.complexity}
        duration={mealItemProps.duration}
        ingredients={mealItemProps.ingredients}
        id={mealItemProps.id}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
