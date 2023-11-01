import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/route";
import "./App";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
