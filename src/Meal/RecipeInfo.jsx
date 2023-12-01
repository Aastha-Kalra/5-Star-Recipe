import React, { useState } from "react";
import { useParams } from "react-router-dom";
let vId = "";
const RecipeInfo = () => {
  const [item, setItem] = useState();
  const { MealId } = useParams();

  if (MealId !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }

  if (item) {
    const url = item.strYoutube;
    const str = url.split("=");
    vId = str[str.length - 1];
  }

  return (
    <div className="bg-purple-400 p-6 rounded cursor-pointer h-full">
      {!item ? (
        ""
      ) : (
        <div className="text-white p-3 flex flex-col gap-6 justify-center items-center">
          <h1 className="font-bold text-4xl text-purple-950">{item.strMeal}</h1>
          <h1 className="font-bold text-4xl text-purple-950">
            {item.strCategory}
          </h1>
         <div className="w-full ">
         <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="w-full h-[500px] rounded-md"
          />

         </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <div className="w-full">
              <div className="text-4xl font-bold p-2 text-center text-purple-950">
                Recipe
              </div>

              <div className="text-2xl w-full bg-purple-950 p-10 hover:scale-95 transition-all ease-in duration-500">
                {item.strInstructions}
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-4xl font-bold text-center p-2 text-purple-950">
                Ingredients
              </h1>
              <div className="text-4xl font-semibold grid grid-cols-1 w-full bg-purple-950 p-4 gap-x-10 justify-between items-center text-sky-500 hover:scale-95 scale-90 transition-all ease-in duration-500">
                <div>1-{item.strIngredient1} : {item.strMeasure1}</div>
                <div>2-{item.strIngredient2} : {item.strMeasure2}</div>
                <div>3-{item.strIngredient3} : {item.strMeasure3}</div>
                <div>4-{item.strIngredient4} : {item.strMeasure4}</div>
                <div>5-{item.strIngredient5} : {item.strMeasure5}</div>
                <div>6-{item.strIngredient6} : {item.strMeasure6}</div>
                <div>7-{item.strIngredient7} : {item.strMeasure7}</div>
                <div>8-{item.strIngredient8} : {item.strMeasure8}</div>
                <div>9-{item.strIngredient9} : {item.strMeasure9}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full h-[540px]">
            <iframe
              src={`https://www.youtube.com/embed/${vId}`}
              frameborder="0"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;
