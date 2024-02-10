const TestSeries = ({ sets, attempts }) => {
    return (
        <div className="flex space-x-4">
            {/* todo show login to attempt overlay*/}
            {sets?.map((set) => (
                <button
                    title={set in attempts ? "Attempted previously" : "Attempt this set"}
                    key={set}
                    className={`border px-3 py-1 ${set in attempts ? "bg-green-300/30" : "bg-gray-300/30"}`}
                >
                    {set}
                </button>
            ))}
        </div>
    );
};

export default TestSeries;
