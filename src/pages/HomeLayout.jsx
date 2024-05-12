import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-1">
        <Outlet />
      </section>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default HomeLayout