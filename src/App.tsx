import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import PageNotFound from "./components/pages/PageNotFound"
import routes from "./routes"


function App() {
  const router = createBrowserRouter([{
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: routes
  }])
  return (
    <RouterProvider router={router} />
  )
}

export default App
