import PageContext from "./PageContext"

import Navbar from "./Navbar"

const Section = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      <div className="flex-1 flex w-full">
        <PageContext />
      </div>
    </div>
  )
}

export default Section