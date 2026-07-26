import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const NotFound = lazy(() => import("@/pages/NotFound"));
const UserDisplay = lazy(() => import("@/Apps/pages/UserShowList"));
const Home = lazy(() => import("@/pages/Home"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/userdisplay",
        element: <UserDisplay />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
],
    {
        basename: "/cicd",
    }
);