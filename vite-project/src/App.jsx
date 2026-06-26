
import Card from "./components/card"

const App = () => {
  return (
    <>
    <div className="parent">
  <Card user='Rahul' age={21} img='https://images.pexels.com/photos/7883809/pexels-photo-7883809.jpeg'/>
  <Card user='Shonam' age={18} img='https://images.pexels.com/photos/38112982/pexels-photo-38112982.jpeg'/>
  <Card user='Shivam' age={25}/>
  
    </div>


    </>
  
  )
}



export default App