import Recipe from "./Recipe";
import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });
  return (
    <div className="col-span-2 grid md:grid-cols-2 gap-5">
      {recipes.map((recipe) => (
        <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
