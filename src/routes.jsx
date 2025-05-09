import App from "./App";
import Checkout from "./Checkout";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
        errorElement: <ErrorPage />,
    },
];

export default routes;
