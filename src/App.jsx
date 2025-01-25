import { useState, useEffect } from "react";

import RecipesSidebar from "./components/RecipesSidebar";
import NewRecipe from "./components/NewRecipe";
import NoRecipeSelected from "./components/NoRecipeSelected";
import SelectedRecipe from "./components/SelectedRecipe";
import recipes from "./assets/RecipesData";

function App() {
  const [recipesState, setRecipesState] = useState({
    selectedRecipeId: undefined,
    recipes: [],
  });

  // Programmatically initialize selectedIngredients when the component mounts
  useEffect(() => {
    // Initialize selectedIngredients for each recipe
    const recipesWithSelectedIngredients = recipes.map((recipe) => {
      // The second argument {} in the reduce method is the initial value,
      // an empty object in this case.
      const selectedIngredients = recipe.ingredients.reduce(
        (acc, ingredient) => {
          acc[ingredient] = true; // Set all ingredients as checked initially
          return acc;
        },
        {}
      );

      return {
        ...recipe,
        selectedIngredients, // Add selectedIngredients to the recipe
      };
    });

    setRecipesState({
      selectedRecipeId: undefined,
      recipes: recipesWithSelectedIngredients,
    });
  }, []);

  const handleCheckboxChange = (ingredient) => {
    setRecipesState((prevState) => {
      const updatedRecipes = prevState.recipes.map((recipe) => {
        if (recipe.id === prevState.selectedRecipeId) {
          return {
            ...recipe,
            selectedIngredients: {
              ...recipe.selectedIngredients,
              [ingredient]: !recipe.selectedIngredients[ingredient],
            },
          };
        }
        return recipe;
      });

      return { ...prevState, recipes: updatedRecipes };
    });
  };

  function handleSelectRecipe(id) {
    setRecipesState((prevState) => {
      return {
        ...prevState,
        selectedRecipeId: id,
      };
    });
  }

  function handleStartAddRecipe() {
    setRecipesState((prevState) => {
      return {
        ...prevState,
        selectedRecipeId: null,
      };
    });
  }

  function handleAddRecipe(recipeData) {
    setRecipesState((prevState) => {
      const recipeId = Math.random();
      const newRecipe = {
        ...recipeData,
        id: recipeId,
      };
      return {
        ...prevState,
        selectedRecipeId: recipeId,
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  }

  function handleCancelAddRecipe() {
    setRecipesState((prevState) => {
      return {
        ...prevState,
        selectedRecipeId: undefined,
      };
    });
  }

  function handleDeleteRecipe() {
    setRecipesState((prevState) => {
      return {
        ...prevState,
        selectedRecipeId: undefined,
        recipes: prevState.recipes.filter(
          (recipe) => recipe.id !== prevState.selectedRecipeId
        ),
      };
    });
  }

  const selectedRecipe = recipesState.recipes.find(
    (recipe) => recipe.id === recipesState.selectedRecipeId
  );

  let content = (
    <SelectedRecipe
      recipe={selectedRecipe}
      onDelete={handleDeleteRecipe}
      onCheckboxChange={handleCheckboxChange}
    />
  );

  if (recipesState.selectedRecipeId === null) {
    content = (
      <NewRecipe onAdd={handleAddRecipe} onCancel={handleCancelAddRecipe} />
    );
  } else if (recipesState.selectedRecipeId === undefined) {
    content = <NoRecipeSelected onStartAddRecipe={handleStartAddRecipe} />;
  }

  return (
    <main className="flex h-screen my-8 gap-8">
      <RecipesSidebar
        onStartAddRecipe={handleStartAddRecipe}
        recipes={recipesState.recipes}
        onSelectRecipe={handleSelectRecipe}
        selectedRecipeId={recipesState.selectedRecipeId}
      />
      {content}
    </main>
  );
}

export default App;
