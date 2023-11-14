import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import Menu from "../menu/Menu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
        ],
    },
]);
export default router;
