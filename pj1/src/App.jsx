import { useState } from "react"

const App = () => {

const [num, setnum] = useState({user:"rahul, age:20"})

const btn=()=>{
  const newNum ={...num};
  newNum.user="amit"
  newNum.age=34;
  setnum(newNum)
}

  return (
    <div >
      <h1>{num.user},{num.age}</h1>
<button onClick={btn}>Numbering</button>
    </div>
  )
}

export default App