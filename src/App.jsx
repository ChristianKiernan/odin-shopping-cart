import { useState } from "react";
import Homepage from "./Homepage";
import Shop from "./Shop";

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item])
    };

    const totalItems = cart.length;
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    return (
        <>
            <h1>{totalItems}{totalPrice}</h1>
            <Homepage addToCart={addToCart}/>
            <Shop addToCart={addToCart}/>
        </>
    );
};

export default App;
