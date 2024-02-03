const ActionButtons = ({
    setCurrentQuestion,
    mcqLength,
    currentQuestion,
    handleSubmit,
    quizSubmitted,
    attemptedQuestionLength,
}) => {
    return (
        <div className="flex py-6 justify-evenly">
            <button
                onClick={() => {
                    setCurrentQuestion((prev) => {
                        return prev < 1 ? prev : prev - 1;
                    });
                }}
                className="border rounded-md px-2 py-1"
                disabled={quizSubmitted}
            >
                Previous
            </button>
            {/* ALL GOOD */}

            {currentQuestion >= mcqLength - 1 ? (
                <button
                    onClick={() => {
                        handleSubmit();
                    }}
                    className="border disabled:opacity-25 disabled:cursor-pointer rounded-md bg-green-600 text-white px-2 py-1"
                    disabled={
                        attemptedQuestionLength !== mcqLength || quizSubmitted
                    }
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
                    className="border rounded-md px-2 py-1"
                    disabled={quizSubmitted}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default ActionButtons;
