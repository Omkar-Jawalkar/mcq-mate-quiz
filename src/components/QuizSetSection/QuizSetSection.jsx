import PropTypes from "prop-types";
import TestSeries from "./TestSeries";
import RandomSeries from "./RandomSeries";

const QuizSetSection = ({ sets, attempts }) => {
    return (
        <div className="flex w-full py-6 justify-evenly border-b border-black/25 ">
            <TestSeries sets={sets} attempts={attempts} />
            <RandomSeries />
        </div>
    );
};

QuizSetSection.propTypes = {
    sets: PropTypes.array,
    attempts: PropTypes.object,
};

export default QuizSetSection;
