import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";

const Shop = () => {
    return (
        <div className="wrapper">
            <NavBar
                heading="Shop Our Wonderful Collection"
                url={<Link to="/">Return to Homepage</Link>}
            />
            <div>
                <Content pageType="shop" />
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
