import { useEffect, useState } from "react";
import { fetchRecipe } from "../service/recipes";
import { useParams } from "react-router";
import "../styles/RecipeDetails.css";
import { useNavigate } from "react-router";


export default function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  

  useEffect(() => {
    async function loadRecipe() {
      setLoading(true);
      const data = await fetchRecipe(id);
      setRecipe(data);
      setLoading(false);
    }
    loadRecipe();
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!recipe) return <p className="error">Recipe not found</p>;

  return (
    <>
    <div
  className="recipe-hero"
  style={{
    backgroundImage: `url(${recipe.image})`
  }}
>
  <div className="recipe-hero-overlay">
    <h1>{recipe.name}</h1>
  </div>
</div>

    <div className="recipe-details">
      <h1 className="recipe-title">{recipe.name}</h1>

      <div className="recipe-meta">
        <span>⏱ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
        <span>🍽 {recipe.servings} servings</span>
        <span>🔥 {recipe.caloriesPerServing} kcal</span>
      </div>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul className="ingredients-list">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Instructions</h2>
        <ol className="instructions-list">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
      <button className="back-button" onClick={() => navigate(-1)}>
  ← Back to recipes
</button>

    </div>
    </>
  );
}
