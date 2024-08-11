import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";

export default function DynamicRoutes() {
  return [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "*",
      element: "main-error-page",
    },
  ];
}
