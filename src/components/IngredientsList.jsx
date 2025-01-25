import { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function IngredientsList({ recipe, onCheckboxChange }) {
  const ingredients = recipe.ingredients;
  const selectedIngredients = recipe.selectedIngredients;

  // Handle copy functionality
  function handleCopyList() {
    const checkedIngredients = ingredients
      .filter((ingredient) => selectedIngredients[ingredient])
      .join("\n");

    if (checkedIngredients) {
      navigator.clipboard.writeText(checkedIngredients).then(() => {
        alert("Ingredients copied to clipboard!");
      });
    } else {
      alert("No ingredients selected!");
    }
  }

  return (
    <>
      <ul className="list-none list-inside text-stone-600">
        {ingredients.map((ingredient) => (
          <li className="mb-3" key={ingredient}>
            <Checkbox
              title={ingredient}
              checked={selectedIngredients[ingredient]}
              onChange={() => onCheckboxChange(ingredient)}
            />
          </li>
        ))}
      </ul>
      <Button onClick={handleCopyList}>Copy ingredients</Button>
    </>
  );
}
