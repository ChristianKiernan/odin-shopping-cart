import App from "./App";
import Homepage from "./Homepage";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
        ],
    },
];

export default routes;
