import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Homes";
import Layout from "./components/Layouts";
import ProductDetail from "./pages/ProductDetail";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },{
          path:'/product-detail/:id',
          element: <ProductDetail />
        }
      ],
    },
  ]);

  return element;
}

export default App;
