import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeInfo from './Meal/RecipeInfo'
import Meal from './Meal/Meal'
function App() {
  return(
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Meal />} />
          <Route path="/:MealId" element={<RecipeInfo />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
