import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="">
            <nav className="flex justify-between items-center py-5">
                <ul>
                    <NavLink className={" text-3xl"} to={"/"}>
                        BISTRO BOSS
                    </NavLink>
                </ul>
                <ul className="flex gap-5 text-lg">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>contact us</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>our menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>our shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>cart</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>sign in</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
