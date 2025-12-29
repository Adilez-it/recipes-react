import "../styles/Filters.css";

export default function FilterCuisine({ value, onChange, recipes }) {
  // Extraire les cuisines uniques depuis les recettes
  const cuisines = Array.from(
    new Set(recipes.map((recipe) => recipe.cuisine).filter(Boolean))
  );

  return (
    <div className="filter-wrapper">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="filter-select"
      >
        <option value="">All cuisines</option>
        {cuisines.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
