import {useEffect, useState} from "react"




function Counter({Number}) {

  const [num, SetNum] = useState(Number);
  


  const increaseNum = () => {
    (
       SetNum((preNum) => {
       return preNum+=1
    })
  )}
    

   const decreaseNum = () => {
    (
      SetNum((item) => {
      return item-=1
    })
  )}
  
    return (
        <div>
            <button onClick={increaseNum}>+</button>
                
            <h1>{num}</h1>
            
            <button onClick={decreaseNum}>-</button>
   
    </div>
  )
}

export default Counter
