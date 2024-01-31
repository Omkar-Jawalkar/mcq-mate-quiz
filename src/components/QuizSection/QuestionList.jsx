import PropTypes from "prop-types";

const QuestionList = ({ mcqs, attemptedQuestion, setCurrentQuestion }) => {
    return (
        <div className="flex py-4 px-4 space-x-2">
            {mcqs?.map((mcq, index) => (
                <button
                    onClick={() => {
                        setCurrentQuestion(index);
                    }}
                    key={index}
                    className={`  ${
                        Object.keys(attemptedQuestion).includes(String(mcq?.id))
                            ? "bg-blue-500"
                            : "bg-gray-300"
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
