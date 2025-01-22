import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewRecipe({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const source = useRef();
  const ingredients = useRef();
  const instructions = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredSource = source.current.value;
    const enteredIngredients = ingredients.current.value
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    const enteredInstructions = instructions.current.value
      .split("\n")
      .map((step) => step.trim())
      .filter((step) => step !== "");

    if (
      enteredTitle.trim() === "" ||
      enteredIngredients.length === 0 ||
      enteredInstructions.length === 0
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      source: enteredSource,
      ingredients: enteredIngredients,
      instructions: enteredInstructions,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 mr-3">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Recipe Title" />
          <Input type="text" ref={source} label="Recipe Source" />
          <Input
            ref={ingredients}
            label="Ingredients (one per line)"
            textarea
          />
          <Input
            ref={instructions}
            label="Instructions (one step per line)"
            textarea
          />
        </div>
      </div>
    </>
  );
}
