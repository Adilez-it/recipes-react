const BASE_URL = "https://dummyjson.com/recipes";

/**
 * Fetch a list of recipes with pagination.
 * @param {Object} params - Pagination params
 * @param {number} params.limit - Number of recipes per page
 * @param {number} params.skip - Number of recipes to skip
 * @returns {Promise<Object>} - API response with recipes and total count
 */
export async function fetchRecipes({ limit = 10, skip = 0 } = {}) {
  try {
    const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
    if (!res.ok) throw new Error("Failed to fetch recipes");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fetchRecipes error:", error);
    return { recipes: [], total: 0 };
  }
}

/**
 * Fetch a single recipe by its ID.
 * @param {number} id - Recipe ID
 * @returns {Promise<Object>} - Recipe object
 */
export async function fetchRecipeById(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch recipe with id ${id}`);
    return await res.json();
  } catch (error) {
    console.error("fetchRecipeById error:", error);
    return null;
  }
}

/**
 * Fetch recipes filtered by a specific tag.
 * @param {string} tag - Recipe tag
 * @param {Object} params - Pagination params
 * @param {number} params.limit - Number of recipes per page
 * @param {number} params.skip - Number of recipes to skip
 * @returns {Promise<Object>} - API response with recipes and total count
 */
//export async function fetchRecipesByTag(tag, { limit = 10, skip = 0 } = {}) {
 // try {
  //  const res = await fetch(
      {/* encodeURIComponent(tag) : encode le tag pour qu'il soit sûr à inclure dans l'URL
        //par exemple, les espaces deviennent %20, les caractères spéciaux sont encodés,
        //afin d'éviter des erreurs lors de la requête HTTP
     */}
    /*  `${BASE_URL}/tag/${encodeURIComponent(tag)}?limit=${limit}&skip=${skip}`
    );
    if (!res.ok) throw new Error(`Failed to fetch recipes by tag "${tag}"`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fetchRecipesByTag error:", error);
    return { recipes: [], total: 0 };
  }
}*/

export async function fetchRecipe(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    console.log(`${BASE_URL}/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch recipe:", error);
    return null;
  }
}
export async function fetchAllTags() {
  try {
    const res = await fetch(`${BASE_URL}/tags`);
    if (!res.ok) throw new Error("Failed to fetch tags");
    const data = await res.json();
    return data; // un tableau de tags
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function fetchRecipesByTag(tag) {
  try {
    const res = await fetch(`${BASE_URL}/tag/${encodeURIComponent(tag)}`);
    if (!res.ok) throw new Error(`Failed to fetch recipes for tag ${tag}`);
    const data = await res.json();
    return data; // { recipes: [...], total: number }
  } catch (error) {
    console.error(error);
    return { recipes: [], total: 0 };
  }
}