import React from "react";
import PropTypes from "prop-types";

const RandomSeries = ({ onStartQuiz }) => {
    return (
        <div>
            <h2 className="mb-2">Select quiz type</h2>
            <div className="flex flex-col max-w-sm gap-2 mx-auto my-4">
                <button onClick={() => { onStartQuiz({ type: 'random-mcqs', totalMcqs: 10 }) }} className={`btn-secondary-outline`} >
                    🚲 10 Questions
                </button>
                <button onClick={() => { onStartQuiz({ type: 'random-mcqs', totalMcqs: 15 }) }} className={`btn-secondary-outline`} >
                    🏍 15 Questions
                </button>
                <button onClick={() => { onStartQuiz({ type: 'random-mcqs', totalMcqs: 20 }) }} className={`btn-secondary-outline`} >
                    🚗 20 Questions
                </button>
            </div>
        </div>
    );
};

RandomSeries.propTypes = {
    onStartQuiz: PropTypes.func,
};

export default RandomSeries;
