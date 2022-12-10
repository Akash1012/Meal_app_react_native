import { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealsList/mealsList";

function MealsOverViewScreen({ navigation, route }) {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoriesTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoriesTitle,
    });
  }, [catId, navigation]);

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  //   const catId = useRoute();

  //   function renderMealItem(itemData) {
  //     const item = itemData.item;
  //     const mealItemProps = {
  //       title: item.title,
  //       imageUrl: item.imageUrl,
  //       affordability: item.affordability,
  //       complexity: item.complexity,
  //       duration: item.duration,
  //       ingredients: item.ingredients,
  //       id: item.id,
  //     };
  //     return (
  //       <MealItem
  //         title={mealItemProps.title}
  //         imageUrl={mealItemProps.imageUrl}
  //         affordability={mealItemProps.affordability}
  //         complexity={mealItemProps.complexity}
  //         duration={mealItemProps.duration}
  //         ingredients={mealItemProps.ingredients}
  //         id={mealItemProps.id}
  //       />
  //     );
  //   }
  //   return (
  //     <View style={styles.container}>
  //       <FlatList
  //         data={displayMeals}
  //         keyExtractor={(itemData) => itemData.id}
  //         renderItem={renderMealItem}
  //       />
  //     </View>
  //   );

  return <MealList items={displayMeals} />;
}

export default MealsOverViewScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
// });
