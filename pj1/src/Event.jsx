
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

    </div>
  )
}

export default Event