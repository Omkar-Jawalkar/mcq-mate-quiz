const TestSeries = ({ sets, attempts }) => {
    return (
        <div className="space-y-2">
            <h1 className="text-xl">Test Series</h1>

            <div className="flex space-x-4">
                {sets?.map((set) => (
                    <button
                        key={set}
                        className={`border ${
                            set in attempts ? "bg-green-600" : "bg-gray-300"
                        } px-3 py-1 border-black bg-gray-300 `}
                    >
                        {set}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TestSeries;
