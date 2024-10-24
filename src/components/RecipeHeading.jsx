import Recipes from "./recipe/Recipes";
import Cook from "./cook/Cook";
import PropTypes from "prop-types";
const RecipeHeading = ({
  handleRecipeQueue,
  recipeQueue,
  handleRemove,
  currentCooking,
  calculate,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="my-8 md:my-14">
      <div className="text-center space-y-4 mb-8">
        <h3 className="text-2xl lg:text-4xl font-semibold">Our Recipes</h3>
        <p className="text-[#150B2B99]">
          Explore a delightful collection of recipes, carefully crafted to
          inspire your next meal. From quick <br className="hidden md:block" />{" "}
          and easy dishes to gourmet creations, there&apos;s something for every
          taste and occasion!
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5">
        <Recipes handleRecipeQueue={handleRecipeQueue}></Recipes>
        <Cook
          recipeQueue={recipeQueue}
          handleRemove={handleRemove}
          currentCooking={currentCooking}
          calculate={calculate}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Cook>
      </div>
    </div>
  );
};

RecipeHeading.propTypes = {
  handleRecipeQueue: PropTypes.func,
  recipeQueue: PropTypes.array,
  handleRemove: PropTypes.func,
  currentCooking: PropTypes.array,
  calculate: PropTypes.func,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default RecipeHeading;
