import App from "./App";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";

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
