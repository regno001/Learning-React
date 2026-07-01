import { useState } from "react";

const H1 = () => {
const [num, setA] = useState(10);

function SoutA(){
  setA(30)
}

  return (
    <div>
<button onClick={SoutA}>click</button>
<h1>{num}</h1>
    </div>
  )
}

export default H1