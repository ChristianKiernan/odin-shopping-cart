import cart from "./assets/cart.svg";

const NavBar = ({ heading, url }) => {
    return (
        <div className="navbar">
            <h1>{heading}</h1>
            <div className="navbarRow2">
                <h5>{url}</h5>
                <img src={cart} height="40px" />
            </div>
        </div>
    );
};

export default NavBar;
