import Recipe from "./Recipe";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
const Recipes = ({ handleRecipeQueue }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });
  return (
    <div className="col-span-2 grid md:grid-cols-2 gap-5">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
          handleRecipeQueue={handleRecipeQueue}
        ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleRecipeQueue: PropTypes.func,
};

export default Recipes;
