import PropTypes from "prop-types";
import { useEffect } from "react";

const QuestionList = ({
    mcqs,
    currentQuestion,
    attemptedQuestion,
    setCurrentQuestion,
    quizSubmitted,
    answerObj,
    setShowResult,
}) => {
    const beforeSubmittingQuizColors = (mcqId) => {
        return Object.keys(attemptedQuestion).includes(String(mcqId))
            ? "bg-blue-400"
            : "bg-gray-300";
    };

    const afterSubmittingQuizColors = (mcqId) => {
        return answerObj[mcqId] === true ? "bg-green-600" : "bg-red-500";
    };

    useEffect(() => { }, []);

    return (
        <div className="flex flex-col w-full space-y-4">

            {/* Questions serial numbers */}
            {/* This should take less screen size and user cal always scroll down for navigation*/}
            <div className="flex flex-wrap gap-2 px-2 py-4 overflow-y-auto max-h-20"
            // style={{ boxShadow: "inset 0px 5px 5px -5px rgba(0, 0, 0, 0.2)" }}
            >
                {mcqs?.map((mcq, index) => {

                    // for questions serial number
                    let classNames;

                    if (quizSubmitted) {
                        classNames = answerObj[mcq?.id] ? "bg-green-600" : "bg-red-500";
                    } else if (currentQuestion === index) {
                        classNames = "bg-blue-200 border-b-2 border-b-blue-500";
                    } else if (Object.keys(attemptedQuestion).includes(String(mcq?.id))) {
                        classNames = "bg-blue-600";
                    } else {
                        classNames = "bg-gray-300";
                    }

                    return (
                        <button
                            onClick={() => {
                                setCurrentQuestion(index);
                                setShowResult(false);
                            }}
                            key={index}
                            className={`${classNames} border px-3 py-1 bg-gray-300/30`}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>

            {quizSubmitted && (
                <button
                    onClick={() => {
                        setShowResult("true");
                    }}
                    className="mb-4 text-green-600 underline"
                >
                    Results
                </button>
            )}
        </div>
    );
};
QuestionList.propTypes = {
    mcqs: PropTypes.array,
    attemptedQuestion: PropTypes.array,
};
export default QuestionList;
