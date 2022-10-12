import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const useRecipes = () => {
  return useContext(RecipeContext)
}

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;

// const recipeReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_RECIPE": {
//       const newRecipe = action.payload.recipe
//       return { recipes: [newRecipe, ...state.recipes] }
//     }
//     case "GET_ALL": {
//       return { recipes: state.recipes }
//     }
//   }
// };