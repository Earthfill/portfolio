import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}

export default HomeLayout