const ActionButtons = ({ setCurrentQuestion, mcqLength }) => {
    return (
        <div className="flex justify-evenly">
            <button
                onClick={() => {
                    setCurrentQuestion((prev) => {
                        return prev < 1 ? prev : prev - 1;
                    });
                }}
                className="border px-2 py-1"
            >
                Back
            </button>
            <button
                onClick={() => {
                    setCurrentQuestion((prev) =>
                        prev > mcqLength ? prev : prev + 1
                    );
                }}
                className="border px-2 py-1"
            >
                Next
            </button>
        </div>
    );
};

export default ActionButtons;
