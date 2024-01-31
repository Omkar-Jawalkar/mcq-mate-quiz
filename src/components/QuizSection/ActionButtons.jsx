const ActionButtons = ({
    setCurrentQuestion,
    mcqLength,
    currentQuestion,
    handleSubmit,
}) => {
    return (
        <div className="flex py-6 justify-evenly">
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

            {currentQuestion >= mcqLength - 1 ? (
                <button
                    onClick={() => {
                        handleSubmit();
                    }}
                    className="border px-2 py-1"
                >
                    Submit
                </button>
            ) : (
                <button
                    onClick={() => {
                        setCurrentQuestion((prev) =>
                            prev >= mcqLength - 1 ? prev : prev + 1
                        );
                    }}
                    className="border px-2 py-1"
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default ActionButtons;
