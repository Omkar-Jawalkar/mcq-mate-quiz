import React from "react";

const RandomSeries = () => {
    return (
        <div className="space-y-2">
            <h1 className="text-xl">Random Series</h1>

            <button
                className={`border rounded-md px-3 py-1 border-black bg-gray-300 `}
            >
                Generate Random Quiz
            </button>
        </div>
    );
};

export default RandomSeries;
