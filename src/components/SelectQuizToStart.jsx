import PropTypes from "prop-types";
import TestSeries from "./QuizSetSection/TestSeries";
import RandomSeries from "./QuizSetSection/RandomSeries";
import { useState } from "react";

const SelectQuizToStart = ({ sets, attempts, onStartQuiz, isQuizStarted }) => {
    const [openedTab, setOpenedTab] = useState('test-series');

    return (
        <div className={`w-full relative p-2 border-b justify-evenly ${isQuizStarted ? 'pointer-events-none opacity-40 select-none' : ''}`}>

            {/* {isQuizStarted && (
                <p className="absolute translate-x-1/2 translate-y-1/2">Quiz started</p>
            )} */}

            {/* todo disable this navigation once quiz is started*/}
            <div className="space-x-2">
                <button
                    className={`py-2 text-xl ${openedTab === 'test-series' ? 'border-b-2 border-primary-600 font-semibold' : 'border-none'} `}
                    onClick={() => setOpenedTab('test-series')}
                >
                    Test Series
                </button>
                <button
                    className={`py-2 text-xl ${openedTab === 'random-mcqs' ? 'border-b-2 border-primary-600  font-semibold' : 'border-none'} `}
                    onClick={() => setOpenedTab('random-mcqs')}
                >
                    Random Mcqs
                </button>
            </div>

            <div className="px-2 py-4 border rounded-b-md border-primary-600/40">
                {openedTab === 'test-series' && <TestSeries sets={sets} attempts={attempts} onStartQuiz={onStartQuiz} />}
                {openedTab === 'random-mcqs' && <RandomSeries onStartQuiz={onStartQuiz} />}
            </div>
        </div>
    );
};

SelectQuizToStart.propTypes = {
    sets: PropTypes.array,
    attempts: PropTypes.object,
    onStartQuiz: PropTypes.func
};

export default SelectQuizToStart;
