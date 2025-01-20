import Layout from "../component/layout/Layout";
import HomePage from "../pages/home-page/HomePage";

export const menu = [
  {
    name: "Главная",
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // по умолчанию главная страница
        // path: "/", // по умолчанию главная страница тоже
        element: <HomePage />,
      },
      {
        path: "/movie-detail/:movieId",
        element: null,
      },
      {
        path: "/auth",
        element: null,
      },
      {
        path: "/profile",
        element: null,
      },
    ],
  },
];
