import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { Suspense, lazy, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserConfig from "./utils/UserConfig";
import { Provider } from "react-redux";
import Store from "./utils/store";

const GroceryMart = lazy(() => import("./components/Grocerymart")); //lazy loading  or code splitting

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ashutosh Tripathi",
    email: "ramtripathi246@gmail.com",
  });
  return (
    <>
      <Provider store={Store}>
        <UserConfig.Provider
          value={{
            user: user,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserConfig.Provider>
      </Provider>
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <Menu />,
      },
      {
        path: "/grocerymart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <GroceryMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
