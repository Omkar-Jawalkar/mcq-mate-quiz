import QuestionList from "./QuestionList";
import Question from "./Question";
import ActionButtons from "./ActionButtons";
import PropTypes from "prop-types";
import { useState } from "react";

const QuizSection = ({ mcqs }) => {
    const [attemptedQuestionWithAnswers, setAttemptedQuestionWithAnswers] =
        useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <div className="flex flex-col">
            <QuestionList
                attemptedQuestion={attemptedQuestionWithAnswers}
                mcqs={mcqs}
            />
            <Question
                setAttemptedQuestionWithAnswers={
                    setAttemptedQuestionWithAnswers
                }
                currentMcq={mcqs[currentQuestion]}
            />
            <ActionButtons
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
            />
        </div>
    );
};

QuizSection.propTypes = {
    mcqs: PropTypes.array,
};

export default QuizSection;
