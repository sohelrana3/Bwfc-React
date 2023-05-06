import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}> 
      <Route index element={<Home/>}></Route>
    </Route>
  )
);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
