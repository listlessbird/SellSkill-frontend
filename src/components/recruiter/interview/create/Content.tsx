import Mainbody from "./Mainbody"
import Sidebar from "../../Sidebar"
import { useState } from "react"

const Content = () => {
  const [activePage, setActivePage] = useState('career')

  return (
    <div>
      <div className="flex min-h-screen flex-auto flex-shrink-0 bg-gray-50 text-gray-800 antialiased">
        <div className="w-60">
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
        </div>
        <Mainbody />
      </div>
    </div>
  )
}

export default Content