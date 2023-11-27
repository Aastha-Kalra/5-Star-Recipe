import React from "react";
import {useNavigate} from "react-router-dom";
const MealItem = ({ data }) => {
  console.log(data);
  const navigate= useNavigate();
  return (
    <>
      {!data
        ? (
          <div className="text-5xl font-bold">
            Not Found
          </div>
        )
        : data.map((item) => {
            return (
              <div className="bg-purple-600 p-6 rounded hover:scale-90 transition-all duration-500 ease-in cursor-pointer" onClick={()=>navigate(`/${item.idMeal}`)}>
                <div>
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w- rounded "
                  />
                </div>

                <h1 className="text-3xl font-semibold text-center p-2">
                  {item.strMeal}
                </h1>
              </div>
            );
          })}
    </>
  );
};

export default MealItem;
