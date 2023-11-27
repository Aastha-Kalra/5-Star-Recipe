import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch]= useState('');


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);


  const handleSearch=(e)=>{
  if(  e.key=="Enter"){
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }

  }

  const setIndex = (alpha)=>{
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }
  return (
    <div className="bg-black h-full text-white flex items-center flex-col gap-5  p-2 pb-10">
      <div className="text-4xl font-bold">Search Your Food Recipe</div>

      <div>
        <input
          type="text"
          className="rounded h-14 p-2 w-96 text-xl bg-purple-300 focus:outline-none text-white/90 font-semibold"
          placeholder="Enter Your Dish Name here..."
          onChange={(e)=>setSearch(e.target.value)}
          onKeyPress={handleSearch}
        />
      </div>

      <div className="grid grid-cols-4 gap-10 my-10 px-14">
        {show ? <MealItem data={item} /> : (
          <div className="text-5xl font-bold">
            Not Found
          </div>
        )}
      </div>
      <RecipeIndex  alphaIndex={(alpha)=>setIndex(alpha)}/>
    </div>
  );
};

export default Meal;
