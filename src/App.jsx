import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ContactLayout from "./NewRouterMethod/ContactLayout";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/ContactForm";
import NotFound from "./Components/NotFound";
import JobLayout from "./NewRouterMethod/JobLayout";
import Jobs, { jobloader } from "./pages/Jobs";
import NewRouter from "./NewRouterMethod/NewRouter";

function App() {
  // Creating router configuration using React Router v6's createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <NewRouter />,
      children: [
        { index: true, element: <Home /> }, 
        { path: "products", element: <Products /> },
        { path: "about", element: <About /> }, 
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            { path: "contactinfo", element: <ContactInfo /> }, // "/contact/contactinfo"
            { path: "contactform", element: <ContactForm /> }, // "/contact/contactform"
          ],
        },
        {
          path: "joblayout",
          element: <JobLayout />,
          children: [
            {
              index: true,
              element: <Jobs />,
              loader: jobloader, // Loader function for fetching jobs data
            },
          ],
        },
        // Fallback route for undefined paths
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
