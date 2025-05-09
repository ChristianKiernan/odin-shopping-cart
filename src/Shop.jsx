import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Shop = () => {
    return (
        <div id="shop">
            <NavBar
                heading="Shop Our Wonderful Collection"
                url={<Link to="/">Return to Homepage</Link>}
            />
        </div>
    );
};

export default Shop;
