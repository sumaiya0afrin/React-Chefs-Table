import Header from "./components/Header";
import Banner from "./components/Banner";
import RecipeHeading from "./components/RecipeHeading";
import "./index.css";
import { useState } from "react";
function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [currentCooking, setCurrentCooking] = useState([]);
  const [totalTime, setTime] = useState(0);
  const [totalCalories, setCalories] = useState(0);

  const handleRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );

    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Already Added to the Queue");
    }
  };

  const handleRemove = (id) => {
    const deleteRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setCurrentCooking([...currentCooking, deleteRecipe]);
  };

  const calculate = (time, calories) => {
    setTime(totalTime + time);
    setCalories(totalCalories + calories);
  };
  return (
    <div className="max-w-screen-xl mx-auto p-3">
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading
        handleRecipeQueue={handleRecipeQueue}
        recipeQueue={recipeQueue}
        handleRemove={handleRemove}
        currentCooking={currentCooking}
        calculate={calculate}
        totalTime={totalTime}
        totalCalories={totalCalories}
      ></RecipeHeading>
    </div>
  );
}

export default App;
