import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";

const Homepage = () => {
    return (
        <div className="wrapper">
            <NavBar
                heading="Welcome to The Fake Store"
                url={<Link to="/shop">Shop Now</Link>}
            />
            <div className="content">
                <Content pageType="homepage"/>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
