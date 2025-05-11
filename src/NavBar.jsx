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
                <img src={cart} height="80px" />
                {totalItems > 0 && (
                    <>
                        <div className="circle">
                            <span>{totalItems}</span>
                        </div>
                        <div className="checkout">
                            <p>${totalPrice.toFixed(2)}</p>
                            <button>Check Out</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
