import PropTypes from "prop-types";
import { useEffect } from "react";

const QuestionList = ({
    mcqs,
    currentQuestion,
    attemptedQuestion,
    setCurrentQuestion,
    quizSubmitted,
    answerObj,
}) => {
    const beforeSubmittingQuizColors = (mcqId) => {
        return Object.keys(attemptedQuestion).includes(String(mcqId))
            ? "bg-blue-400"
            : "bg-gray-300";
    };

    const afterSubmittingQuizColors = (mcqId) => {
        return answerObj[mcqId] === true ? "bg-green-600" : "bg-red-500";
    };

    useEffect(() => {}, []);

    return (
        <div className="flex py-4 max-w-screen-lg whitespace-nowrap overflow-auto px-4 space-x-2">
            {mcqs?.map((mcq, index) => {
                let style = quizSubmitted
                    ? answerObj[mcq?.id] === true
                        ? "bg-green-600"
                        : "bg-red-500"
                    : currentQuestion === index
                    ? "bg-blue-200"
                    : Object.keys(attemptedQuestion).includes(String(mcq?.id))
                    ? "bg-blue-600"
                    : "bg-gray-300";

                return (
                    <button
                        onClick={() => {
                            setCurrentQuestion(index);
                        }}
                        key={index}
                        className={` ${style} border px-3 py-1 border-black bg-gray-300 `}
                    >
                        {index + 1}
                    </button>
                );
            })}
        </div>
    );
};
QuestionList.propTypes = {
    mcqs: PropTypes.array,
    attemptedQuestion: PropTypes.array,
};
export default QuestionList;
