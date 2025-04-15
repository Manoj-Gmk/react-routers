// Importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

// React Router DOM imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Importing global styles
import "./App.css";

// Importing layouts and components
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
      path: "/", // Root path
      // Main layout component (e.g., with Navbar)
      element: <NewRouter />,
      children: [
        { index: true, element: <Home /> }, // Default route ("/") renders Home
        { path: "products", element: <Products /> }, // "/products" renders Products
        { path: "about", element: <About /> }, // "/about" renders About page

        // Nested Contact routes using ContactLayout
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            { path: "contactinfo", element: <ContactInfo /> }, // "/contact/contactinfo"
            { path: "contactform", element: <ContactForm /> }, // "/contact/contactform"
          ],
        },

        // Nested Job routes using JobLayout
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

  // Providing the router to the application
  return <RouterProvider router={router} />;
}

export default App;
