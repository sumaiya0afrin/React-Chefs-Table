import Header from "./components/Header";
import Banner from "./components/Banner";
import RecipeHeading from "./components/RecipeHeading";
import "./index.css";
function App() {
  return (
    <div className="max-w-screen-xl mx-auto p-3">
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading></RecipeHeading>
    </div>
  );
}

export default App;
