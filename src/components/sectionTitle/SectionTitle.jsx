import PropTypes from "prop-types";

function SectionTitle({ heading, subHeading }) {
    return (
        <div className="text-center">
            <p className="text-yellow-500">---{subHeading}---</p>
            <h2 className="uppercase py-5 text-4xl  border-gray-600/50 border-y-2 inline-block mt-4">
                ---{heading}---
            </h2>
        </div>
    );
}

export default SectionTitle;
SectionTitle.propTypes = {};
