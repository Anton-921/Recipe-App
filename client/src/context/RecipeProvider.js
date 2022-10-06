import { createContext, useReducer } from "react";

const RecipeContext = createContext({});

const initialState = {
  recipes: [],
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE": {
      const newRecipe = action.payload.recipe
      return { recipes: [newRecipe, ...state.recipes] }
    }
    case "GET_ALL": {
      return { recipes: state.recipes }
    }
  }
};

export const RecipeProvider = ({ children }) => {
  const [recipe, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ recipe, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
