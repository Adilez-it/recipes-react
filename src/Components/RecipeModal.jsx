import { useEffect, useState } from "react";
import { fetchRecipeById } from "../service/recipes";
import "../styles/modal.css";

export default function RecipeModal({ recipeId, onClose }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeById(recipeId).then(setRecipe);
  }, [recipeId]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose}>✖</button>

        <h2>{recipe.name}</h2>
        <img src={recipe.image} width="250" />

        <p>
          {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min •{" "}
          {recipe.caloriesPerServing} kcal
        </p>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
