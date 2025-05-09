import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Content from"./Content";

const App = () => {
    return (
        <div className="wrapper">
            <div className="homepage">
                <NavBar
                    heading="Welcome to The Fake Store"
                    url={<Link to="/shop">Shop Now</Link>}
                />
                <Content />
            </div>
        </div>
    );
};

export default App;
