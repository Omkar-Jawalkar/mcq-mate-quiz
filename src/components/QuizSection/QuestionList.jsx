import PropTypes from "prop-types";
const QuestionList = ({ mcqs, attemptedQuestion }) => {
    return (
        <div className="flex py-4 px-4 space-x-2">
            {mcqs?.map((mcq, index) => (
                <button
                    key={index}
                    className={` ${
                        mcq?.id in attemptedQuestion
                            ? "bg-blue-300"
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
