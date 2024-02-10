import PropTypes from "prop-types";
import TestSeries from "./TestSeries";
import RandomSeries from "./RandomSeries";
import { useState } from "react";

const QuizSetSection = ({ sets, attempts }) => {
    const [tabOpened, setOpenedTab] = useState('test-series');

    return (
        <div className="w-full p-2 border-b justify-evenly">
            <div className="mb-4 space-x-2 ">
                <button
                    className={`py-2 text-xl ${tabOpened === 'test-series' ? 'border-b-2 border-primary-600' : 'border-none'} `}
                    onClick={() => setOpenedTab('test-series')}
                >
                    Test Series
                </button>
                <button
                    className={`py-2 text-xl ${tabOpened === 'random-series' ? 'border-b-2 border-primary-600' : 'border-none'} `}
                    onClick={() => setOpenedTab('random-series')}
                >
                    Random Mcqs
                </button>
            </div>
            <div>
                {tabOpened === 'test-series' && <TestSeries sets={sets} attempts={attempts} />}
                {tabOpened === 'random-series' && <RandomSeries />}
            </div>
        </div>
    );
};

QuizSetSection.propTypes = {
    sets: PropTypes.array,
    attempts: PropTypes.object,
};

export default QuizSetSection;
