import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
