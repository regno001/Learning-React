import Card from "./components/card"
import { jobs } from "./components/data"
const App = () => {
 
  return <div className="parent">{jobs.map(function(elem , idx){
  return <div key={idx}> 
  <Card name=  {elem.name} {...elem}  />
   </div> 
   })} 
   </div>

}

export default App