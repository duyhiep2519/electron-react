import { Root } from "./root";

import { Events } from "components/Events/index";
const { default: ErrorPage } = require("components/Error/ErrorPage");
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/events",
        element: <Events />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
