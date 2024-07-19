import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, HomeLayout, Projects, Contact, Skills, Landing } from "./pages";
import { Suspense, useContext } from "react";
import { Loading } from "./components";
import { ThemeContext } from "./contexts/ToggleMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "bg-gray-950" : "bg-slate-50"}`}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
