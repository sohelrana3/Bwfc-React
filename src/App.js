import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import Home from "./Pages/Home";
import Blog from './Pages/Blog'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}> 
      <Route index element={<Home/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
    </Route>
  )
);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
