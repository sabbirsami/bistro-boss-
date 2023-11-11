import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem";

const PopularMenu = () => {
    const [popularMenuItem, setPopularMenuItem] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularItems = data.filter(
                    (item) => item.category === "popular"
                );
                setPopularMenuItem(popularItems);
            });
    }, []);
    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10 py-16">
                {popularMenuItem.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
        </section>
    );
};

export default PopularMenu;
