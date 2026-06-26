import { Bookmark } from 'lucide-react';
const Card = (props) => {
  return (
   <div className="parent">
    
  
<div className="card">
        <div className="top">
         <img src={props.img}  />
        <button id="save">
         save <Bookmark /></button>
        </div>
       <div className="centre">
          <h1>{props.name}</h1>
        <h2>{props.job}</h2>
        <button className="level">{props.l1}</button>
        <button className="level">{props.l2}</button>
       </div>
       
        <div className="bottom">
         <h1>{props.salary}</h1>
        <button className="apply">Apply</button>
        </div>
       
      
   </div>
      
    </div>
  )
}

export default Card