import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Landing } from "./components"
import { Error, HomeLayout, Projects, Contact, Skills } from "./pages"
import { ThemeContext } from "./contexts/ToggleMode";
import { useContext } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? 'bg-gray-950' : 'bg-slate-50'}`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
