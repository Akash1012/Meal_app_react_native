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

  return <MealList items={displayMeals} />;
}

export default MealsOverViewScreen;
