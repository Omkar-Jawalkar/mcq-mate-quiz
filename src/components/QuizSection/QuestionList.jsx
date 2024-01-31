import PropTypes from "prop-types";

const QuestionList = ({
    mcqs,
    attemptedQuestion,
    setCurrentQuestion,
    quizSubmitted,
    answerObj,
}) => {
    const beforeSubmittingQuizColors = (mcqId) => {
        return Object.keys(attemptedQuestion).includes(String(mcqId))
            ? "bg-blue-500"
            : "bg-gray-300";
    };

    const afterSubmittingQuizColors = (mcqId) => {
        return answerObj[mcqId] === true ? "bg-green-600" : "bg-red-500";
    };

    return (
        <div className="flex py-4 px-4 space-x-2">
            {mcqs?.map((mcq, index) => (
                <button
                    onClick={() => {
                        setCurrentQuestion(index);
                    }}
                    key={index}
                    className={`  ${
                        quizSubmitted
                            ? afterSubmittingQuizColors(mcq?.id)
                            : beforeSubmittingQuizColors(mcq?.id)
                    } border px-3 py-1 border-black bg-gray-300 `}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};
QuestionList.propTypes = {
    mcqs: PropTypes.array,
    attemptedQuestion: PropTypes.array,
};
export default QuestionList;
