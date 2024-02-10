import PropTypes from "prop-types";
import TestSeries from "./TestSeries";
import RandomSeries from "./RandomSeries";
import { useState } from "react";

const QuizSetSection = ({ sets, attempts }) => {
    const [openedTab, setOpenedTab] = useState('test-series');

    return (
        <div className="w-full p-2 border-b justify-evenly">

            {/* todo disable this navigation once quiz is started*/}
            <div className="space-x-2">
                <button
                    className={`py-2 text-xl ${openedTab === 'test-series' ? 'border-b-2 border-primary-600' : 'border-none'} `}
                    onClick={() => setOpenedTab('test-series')}
                >
                    Test Series
                </button>
                <button
                    className={`py-2 text-xl ${openedTab === 'random-series' ? 'border-b-2 border-primary-600' : 'border-none'} `}
                    onClick={() => setOpenedTab('random-series')}
                >
                    Random Mcqs
                </button>
            </div>

            <div className="px-2 py-4 border rounded-b-md border-primary-600/40">
                {openedTab === 'test-series' && <TestSeries sets={sets} attempts={attempts} />}
                {openedTab === 'random-series' && <RandomSeries />}
            </div>
        </div>
    );
};

QuizSetSection.propTypes = {
    sets: PropTypes.array,
    attempts: PropTypes.object,
};

export default QuizSetSection;
