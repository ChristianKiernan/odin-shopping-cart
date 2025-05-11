import { Outlet } from "react-router-dom";
import { useState } from "react";

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const totalItems = cart.length;
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    return (
        <>
            <Outlet context={{ addToCart, totalItems, totalPrice }} />
        </>
    );
};

export default App;
