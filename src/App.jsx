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
            <div>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
            <Outlet context={{ addToCart }} />
        </>
    );
};

export default App;
