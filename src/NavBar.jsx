import { useOutletContext } from "react-router-dom";
import cart from "./assets/cart.svg";

const NavBar = ({ heading, url }) => {
    const { totalItems, totalPrice } = useOutletContext();
    return (
        <div className="navbar">
            <div className="navHeading">
                <h1>{heading}</h1>
                <h5>{url}</h5>
            </div>
            <div className="cartIcon">
                <img src={cart} height="80px"/>
                <span>{totalItems} - ${totalPrice.toFixed(2)} </span>
                <button>Check Out</button>
            </div>
        </div>
    );
};

export default NavBar;
