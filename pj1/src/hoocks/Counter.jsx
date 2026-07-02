import { useState } from "react"

const Counter = () => {
  const [sum, setsum] = useState(0);

  function countinf(){
    return setsum(sum+1);
  }
   function reset(){
      return setsum(0);
    }

    function decrease(){
      return setsum(sum-1);
    }
  return (
 
   
    
 <div className="justify-center m-20 p-20 gap-10">
  <div className="flex justify-center gap-10 flex-wrap" > 
     <h1>{sum}</h1>
     <div className="flex justify-center gap-10 flex-wrap ">
 <button onClick={countinf} className="bg-amber-200 p-2">Click</button>
    <button onClick={reset} className="bg-red-200 p-2"> ClickReset</button>
    <button onClick={decrease} className="bg-blue-200 p-2">ClickDecrese</button>
     </div>
   
  </div>
   
 
 
    </div>
  )
}

export default Counter