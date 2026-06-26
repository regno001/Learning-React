import Card from "./components/card"
import { jobs } from "./components/data"
const App = () => {
 
  return jobs.map(function(elem){
  return <Card name={elem.name} {...elem}  />
  })
}

export default App