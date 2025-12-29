import { useState } from "react";
import RecipeDetails from "../pages/RecipeDetails";
import "../styles/RecipeCard.css";
import { useNavigate } from "react-router-dom";


export default function RecipeCard({ recipe }) {
  const [viewDetails, setViewDetails] = useState(false);
  const navigate = useNavigate();
    function onDelete(id) {
    // For simplicity, we'll just log the deletion. In a real app, you'd update state in the parent component.
    console.log(`Delete recipe with id: ${id}`);
  }
  
  return (
    
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} width="200" />

      <h2>{recipe.name}</h2>

      <p>
        {recipe.cuisine} | {recipe.difficulty}
      </p>

      <p>
        ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
      </p>
      {/* button to show/hide details */}
      <button onClick={() => navigate(`/recipe/${recipe.id}`)}>
        {viewDetails ? "Hide Details" : "View Details"}
      </button>
      {/* button to delete recipe */}
      <button className="delete-btn" onClick={() => onDelete(recipe.id)}>
        Delete
      </button>
      
      
    </div>
  );
}
