import { useState } from "react";

import { recipesConstants } from "../Constants/Recipes";

export default function RecipeViewModel() {
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [recipes, setRecipes] = useState(recipesConstants);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleAddRecipe = () => {
    setRecipes([
      ...recipes,
      {
        id: recipes.length + 1,
        name: recipeName,
        ingredients: recipeIngredients,
      },
    ]);
    setRecipeName("");
    setRecipeIngredients("");
  };

  const handleRecipeIngredientsChange = (event) => {
    setRecipeIngredients(event.target.value);
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const handleEditRecipe = () => {
    setRecipes(
      recipes.map((recipe) => {
        if (recipe.id === selectedRecipeId) {
          return {
            id: recipe.id,
            name: recipeName,
            ingredients: recipeIngredients,
          };
        }
        return recipe;
      })
    );
    setRecipeName("");
    setRecipeIngredients("");
    setSelectedRecipeId(null);
  };

  const handleRecipeNameChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleSelectRecipe = (id) => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === id);
    setRecipeName(selectedRecipe.name);
    setRecipeIngredients(selectedRecipe.ingredients);
    setSelectedRecipeId(id);
  };

  return {
    handleAddRecipe,
    handleDeleteRecipe,
    handleEditRecipe,
    handleRecipeIngredientsChange,
    handleRecipeNameChange,
    handleSelectRecipe,
    recipeIngredients,
    recipeName,
    recipes,
    selectedRecipeId,
  };
}
