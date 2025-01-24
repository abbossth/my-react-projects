import { Outlet } from "react-router"
import Navbar from "../components/navbar"

const Layout = () => {
  return (
    <>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
    </>
  )
}

export default Layout