import PropTypes from "prop-types";
const Recipe = ({ recipe }) => {
  return (
    <div>
      <div className="card bg-base-100 border border-[#28282833]">
        <figure className="px-6 pt-6 h-[200px]">
          <img
            src={recipe.recipe_image}
            alt="Shoes"
            className="rounded-xl h-full w-full object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title">{recipe.recipe_name}</h2>
          <p className="text-[#878787]">{recipe.short_description}</p>
          <div className="divider"></div>
          <p className="font-medium text-lg">Ingredients: 6</p>

          {recipe.ingredients.map((item, idx) => (
            <span key={idx}>
              <li className="text-[#11111199]">{item} </li>
            </span>
          ))}
          <div className="divider"></div>
          <div className="flex gap-4 md:gap-8 mb-6">
            <div
              className="flex gap-2
             items-center"
            >
              <i className="fa-regular fa-clock"></i>
              <p>{recipe.preparing_time} minutes</p>
            </div>

            <div
              className="flex gap-2
             items-center"
            >
              <i className="fa-solid fa-fire-flame-curved"></i>
              <p>{recipe.calories} calories</p>
            </div>
          </div>

          <div className="card-actions">
            <button className="btn bg-[#0BE58A] rounded-full">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
};

export default Recipe;
