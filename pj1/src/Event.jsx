
const Event = () => {
 function btnClick(){
  console.log("btn Clicked");
  
 }

 function MouseEnter(){
  console.log("MouseEnter");
  
 }
 
  return (
    <div>
<button className="rounded bg-amber-300 border-2" onMouseEnter={MouseEnter} onClick={btnClick} >Click</button>
<button onClick={()=>{
  console.log("btn clicked");
  
}}>work</button>


<input type="text" onChange={(elem)=>{
  
 console.log(`input is change`,elem.target.value);

  
  
  
}} placeholder="Enter name"/>
    </div>
  )
}

export default Event