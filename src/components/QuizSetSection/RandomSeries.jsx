import React from "react";

const RandomSeries = () => {
    return (
        <div className="flex flex-col max-w-sm gap-2 mx-auto my-4">
            {/* <h2 className="text-xl">MCQ for test chosen randomly</h2> */}
            <button className={`btn-secondary-outline`} >
                🚲 10 Questions
            </button>
            <button className={`btn-secondary-outline`} >
                🏍 15 Questions
            </button>
            <button className={`btn-secondary-outline`} >
                🚗 20 Questions
            </button>
        </div>
    );
};

export default RandomSeries;
