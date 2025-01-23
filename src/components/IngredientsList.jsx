import { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function IngredientsList({ ingredients }) {
  const [selectedIngredients, setSelectedIngredients] = useState(
    // The second argument {} in the reduce method is the initial value,
    // an empty object in this case.
    ingredients.reduce((acc, ingredient) => {
      acc[ingredient] = true;
      return acc;
    }, {})
  );

  function handleCheckboxChange(ingredient) {
    setSelectedIngredients((prev) => ({
      ...prev,
      [ingredient]: !prev[ingredient],
    }));
  }

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
              onChange={() => handleCheckboxChange(ingredient)}
            />
          </li>
        ))}
      </ul>
      <Button onClick={handleCopyList}>Copy ingredients</Button>
    </>
  );
}
