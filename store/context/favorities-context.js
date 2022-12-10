import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavotiteMealIds] = useState([]);

  function addFavorite(id) {
    setFavotiteMealIds((currentFavtIds) => [...currentFavtIds, id]);
  }
  function removeFavorite(id) {
    setFavotiteMealIds((currentFavtIds) =>
      currentFavtIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
