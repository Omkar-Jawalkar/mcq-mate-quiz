const TestSeries = ({ sets, attempts, onStartQuiz }) => {
    return (
        <div className="flex flex-wrap gap-2 overflow-auto justify-evenly" style={{ maxHeight: "120px" }}>
            {/* todo show login to attempt overlay*/}
            {sets?.map((set) => (
                <button
                    onClick={() => {
                        onStartQuiz({
                            type: 'test-series',
                            seriesId: set,
                        });
                    }}
                    title={set in attempts ? "Attempted previously" : "Attempt this set"}
                    key={set}
                    className={`border hover:shadow px-3 py-1 ${set in attempts ? "bg-green-300/30" : "bg-gray-300/30"}`}
                >
                    {set}
                </button>
            ))}
        </div>
    );
};

export default TestSeries;
