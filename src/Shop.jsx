import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Content from "./Content";

const Shop = () => {
    return (
        <div id="shop">
            <NavBar
                heading="Shop Our Wonderful Collection"
                url={<Link to="/">Return to Homepage</Link>}
            />
            <Content />
        </div>
    );
};

export default Shop;
