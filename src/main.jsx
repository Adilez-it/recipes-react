import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
