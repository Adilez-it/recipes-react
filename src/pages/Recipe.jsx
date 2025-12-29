import { useEffect, useState } from "react";
import {
  fetchRecipes,
  fetchRecipesByTag,
  fetchAllTags,
} from "../service/recipes";
import SearchBar from "../Components/SearchBar";
import FilterCuisine from "../Components/FilterCuisine";
import FilterTags from "../Components/FilterTags";
import RecipeCard from "../Components/RecipeCard";
import Pagination from "../Components/Pagination";
import RecipeModal from "../Components/RecipeModal";
import AddRecipe from "./AddRecipe";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [tag, setTag] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const LIMIT = 10;

  // Charger les recettes selon tag / pagination
  useEffect(() => {
    const load = async () => {
      let data;
      if (tag) {
        data = await fetchRecipesByTag(tag);
      } else {
        data = await fetchRecipes({ limit: LIMIT, skip: page * LIMIT });
      }
      setRecipes(data.recipes);
      setTotal(data.total || data.recipes.length); // fallback si total non fourni
    };
    load();
  }, [page, tag]);

  // Filtrage côté client pour search + cuisine
  const filteredRecipes = recipes.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) &&
      (cuisine ? r.cuisine === cuisine : true)
  );

  const hasNextPage = (page + 1) * LIMIT < total;

  return (
    <>
      <h1>Recipe App</h1>

      {/* Recherche */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Filtres */}
      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        <FilterCuisine value={cuisine} onChange={setCuisine} recipes={recipes} />
        <FilterTags value={tag} onChange={setTag} />
      </div>

      {/* Liste des recettes */}
      <div className="recipes">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onView={() => setSelectedRecipe(recipe.id)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </div>

      {/* Modal pour détails */}
      {selectedRecipe && (
        <RecipeModal
          recipeId={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {/* Ajouter une recette */}
      <AddRecipe />
    </>
  );
}
