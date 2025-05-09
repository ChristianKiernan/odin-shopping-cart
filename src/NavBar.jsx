import cart from "./assets/cart.svg";

const NavBar = ({ heading, url }) => {
    return (
        <div className="navbar">
            <div className="navHeading">
                <h1>{heading}</h1>
                <h5>{url}</h5>
            </div>
            <div className="cartIcon">
                <img src={cart} height="40px" />
            </div>
        </div>
    );
};

export default NavBar;
