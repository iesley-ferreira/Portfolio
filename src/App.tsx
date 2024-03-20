import { RouterProvider } from "react-router-dom"
import { browserRouter } from "./Routes"

function App() {

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
