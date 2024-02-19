const ActionButtons = ({
    setCurrentQuestion,
    mcqLength,
    currentQuestion,
    handleSubmit,
    quizSubmitted,
    attemptedQuestionLength,
}) => {
    return (
        <div className="flex justify-between p-2">
            <button
                onClick={() => {
                    setCurrentQuestion((prev) => {
                        return prev < 1 ? prev : prev - 1;
                    });
                }}
                className="border-gray-600 btn-secondary-outline"
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
                    className="btn-primary disabled:opacity-25 disabled:cursor-pointer"
                    // disabled={
                    //     attemptedQuestionLength !== mcqLength || quizSubmitted
                    // }
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
                    className="border-gray-600 btn-secondary-outline"
                    disabled={quizSubmitted}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default ActionButtons;
