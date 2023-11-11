import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
        <div className="flex gap-10">
            <img
                className="w-20 rounded-e-full rounded-b-full"
                src={image}
                alt=""
            />
            <div className="">
                <h3 className="text-xl">{name}</h3>
                <p className="">{recipe}</p>
            </div>
            <p className="text-green-500">${price}</p>
        </div>
    );
};

export default MenuItem;

MenuItem.propTypes = {
    item: PropTypes.object,
};
