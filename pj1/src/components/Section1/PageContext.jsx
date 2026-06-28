
import Right from "./Right"
import LeftText from "./LeftText"


const PageContext = () => {
  return (
    <div className="grid grid-cols-12 w-full h-full items-center">
      {/* Left Text Wrapper */}
      <div className="col-span-5 px-10 xl:px-16">
        <LeftText />
      </div>
      
      {/* Right Section Wrapper */}
      <div className="col-span-7 h-full w-full py-10 pr-10">
        <Right />
      </div>
    </div>
  )
}

export default PageContext