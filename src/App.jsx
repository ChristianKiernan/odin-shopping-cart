import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const App = () => {
    return (
        <div className="wrapper">
            <div className="homepage">
                <NavBar
                    heading="Welcome to The Fake Store"
                    url={<Link to="/shop">Shop Now</Link>}
                />
            </div>
        </div>
    );
};

export default App;
