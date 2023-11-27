import React from 'react'

const RecipeIndex = ({alphaIndex}) => {
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q" , "R", "S", "T", "U", "V", "W" ,"X", "Y", "Z"]
  return (
    <div className='flex justify-center items-center gap-3 text-3xl'>
        {
            alpha.map((item, i)=>{
                return(
                    <div key={i} className='bg-purple-500 p-2 cursor-pointer hover:bg-purple-400 rounded' onClick={()=>alphaIndex(item)}>
                        {item}
                    </div>
                )
            })
        }
    </div>
  )
}

export default RecipeIndex