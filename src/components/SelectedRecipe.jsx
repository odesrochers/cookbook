import IngredientsList from "./IngredientsList";

export default function SelectedRecipe({ recipe, onDelete, onCheckboxChange }) {
  return (
    <div className="w-[75rem] mt-16 mr-3">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {recipe.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
      </header>
      <section>
        <h2 className="text-xl font-semibold text-stone-500 mt-4 mb-2">
          Ingredients
        </h2>
        <IngredientsList recipe={recipe} onCheckboxChange={onCheckboxChange} />
        <h2 className="text-xl font-semibold text-stone-500 mt-8 mb-2">
          Instructions
        </h2>
        <ol className="list-decimal list-inside text-stone-600">
          {recipe.instructions.map((step, index) => (
            <li className="mb-3" key={index}>
              {step}
            </li>
          ))}
        </ol>
        <a
          className="text-blue-600 inline-block my-8"
          href={recipe.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Original Recipe
        </a>
      </section>
    </div>
  );
}
