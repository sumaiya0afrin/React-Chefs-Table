import PropTypes from "prop-types";

const Cook = ({
  recipeQueue,
  handleRemove,
  currentCooking,
  calculate,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="col-span-2 md:col-span-2 lg:col-span-1">
      <div className="card bg-base-100 border border-[#28282833]">
        <div className="card-body py-4 px-0">
          <h2 className="card-title justify-center">
            Want to cook: {recipeQueue.length}
          </h2>
          <div className="divider bg-[#28282833] h-0 px-20"></div>

          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recipeQueue.map((recipe, idx) => (
                <tr className="hover" key={idx}>
                  <th>{idx + 1}</th>

                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time} minutes</td>
                  <td>{recipe.calories} calories</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(recipe.recipe_id),
                          calculate(recipe.preparing_time, recipe.calories);
                      }}
                      className="btn bg-[#0BE58A] rounded-full"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* currently cooking  */}
        <div className="card-body py-4 px-0">
          <h2 className="card-title justify-center">
            Currently cooking: {currentCooking.length}
          </h2>
          <div className="divider bg-[#28282833] h-0 px-20"></div>

          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {currentCooking.map((recipe, idx) => (
                <tr className="hover" key={idx}>
                  <th>{idx + 1}</th>

                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time} minutes</td>
                  <td>{recipe.calories} calories</td>
                </tr>
              ))}
              <tr>
                <th></th>
                <th></th>
                <th>Total Time = {totalTime}</th>
                <th>Total Calories = {totalCalories}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Cook.propTypes = {
  recipeQueue: PropTypes.array,
  handleRemove: PropTypes.func,
  currentCooking: PropTypes.array,
  calculate: PropTypes.func,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default Cook;
