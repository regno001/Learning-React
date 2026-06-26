
const Card = (props) => {


  return (<div className="parent">
  <img src={props.img} alt="" />
    <div className="card">hellow Guys I am {props.user}  and i am {props.age} old</div>
  </div>
    
  )
}

export default Card