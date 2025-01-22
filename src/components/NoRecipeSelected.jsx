import noRecipeImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoRecipeSelected({ onStartAddRecipe }) {
  return (
    <div className="mt-24 text-center w-2/3 mr-3">
      <img
        src={noRecipeImage}
        alt="An empty recipe list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Recipe Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a recipe or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddRecipe}>Create new recipe</Button>
      </p>
    </div>
  );
}
