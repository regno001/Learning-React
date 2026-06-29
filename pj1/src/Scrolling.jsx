
const Scrolling = () => {
  const pageScrolling= (elem)=>{
if(elem>0){
  console.log("Seedha Scroll");
}else{
    console.log("tex scroll");
    
  }

  }
  return (
    <div onWheel={function(elem){
pageScrolling(elem.deltaY);
    }} >
      <div className="bg-gray-700 min-h-screen"></div>
      <div className="bg-red-800 min-h-screen"></div>
      <div className="bg-blue-800 min-h-screen"></div>
    </div>
  )
}

export default Scrolling