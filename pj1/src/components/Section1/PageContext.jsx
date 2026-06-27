import RightText from "../../../../tailwindcss/src/componentss/section1/RightText"
import LeftText from "./LeftText"

const PageContext = () => {
  return (
    <div className="flex place-content-between ">
      <LeftText />
      <RightText />
    </div>
  )
}

export default PageContext