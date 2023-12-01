import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeInfo from './Meal/RecipeInfo'
import Meal from './Meal/Meal'

function App() {
  return (
    <div className="bg-black  min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/:MealId" element={<RecipeInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
