import { useState } from "react";

export default function AddRecipe({ onAdd }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [prepTimeMinutes, setPrepTimeMinutes] = useState("");
  const [cookTimeMinutes, setCookTimeMinutes] = useState("");
  const [servings, setServings] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [cuisine, setCuisine] = useState("");
  const [caloriesPerServing, setCaloriesPerServing] = useState("");
  const [tags, setTags] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newRecipe = {
      id: Math.floor(Math.random() * 1000000),
      name,
      ingredients: ingredients.split("\n").filter(Boolean),
      instructions: instructions.split("\n").filter(Boolean),
      prepTimeMinutes: Number(prepTimeMinutes),
      cookTimeMinutes: Number(cookTimeMinutes),
      servings: Number(servings),
      difficulty,
      cuisine,
      caloriesPerServing: Number(caloriesPerServing),
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };
    onAdd(newRecipe);
    // Reset form
    setName("");
    setIngredients("");
    setInstructions("");
    setPrepTimeMinutes("");
    setCookTimeMinutes("");
    setServings("");
    setDifficulty("Easy");
    setCuisine("");
    setCaloriesPerServing("");
    setTags("");
  }
  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h3>Add a New Recipe</h3>
      <label>
        Recipe Name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Cuisine
        <input value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
      </label>
      <label>
        Difficulty
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </label>
      <label>
        Ingredients (one per line)
        <textarea
          rows="5"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
      <label>
        Instructions (one step per line)
        <textarea
          rows="6"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </label>
      <div className="form-row">
        <label>
          Prep Time (minutes)
          <input
            type="number"
            value={prepTimeMinutes}
            onChange={(e) => setPrepTimeMinutes(e.target.value)}
          />
        </label>
        <label>
          Cook Time (minutes)
          <input
            type="number"
            value={cookTimeMinutes}
            onChange={(e) => setCookTimeMinutes(e.target.value)}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Servings
          <input
            type="number"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </label>
        <label>
          Calories per Serving
          <input
            type="number"
            value={caloriesPerServing}
            onChange={(e) => setCaloriesPerServing(e.target.value)}
          />
        </label>
      </div>
      <label>
        Tags (comma separated)
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Pizza, Italian"
        />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
