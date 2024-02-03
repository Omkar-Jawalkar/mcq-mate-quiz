import QuestionList from "./QuestionList";
import Question from "./Question";
import ActionButtons from "./ActionButtons";
import PropTypes from "prop-types";
import { useState } from "react";
import Result from "./Result";

const QuizSection = ({ mcqs }) => {
    const [attemptedQuestionWithAnswers, setAttemptedQuestionWithAnswers] =
        useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalCorrectQuestions, setTotalCorrectQuestions] = useState(null);
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [answerObj, setAnswerObj] = useState({});

    const handleSubmit = () => {
        // {
        //     "set_id": 12,
        //     "test_result": {
        //         "123123": true,
        //         "52344": true,
        //         "23442": false
        //     }
        // }

        // {
        //     1 : a,
        //     2 : b,

        // }

        let answerObj = { ...attemptedQuestionWithAnswers };

        // VALIDATIONS

        if (Object.keys(attemptedQuestionWithAnswers).length !== mcqs.length) {
            return alert("Please attempt all question");
        }

        let totalCorrectQuestions = 0;
        mcqs.map((mcq) => {
            let selectedAnswer = answerObj[mcq?.id];
            let isCorrect = selectedAnswer === mcq?.answer;
            if (isCorrect === true) {
                totalCorrectQuestions = totalCorrectQuestions + 1;
            }
            answerObj[mcq?.id] = isCorrect;
        });

        console.log(answerObj);
        setAnswerObj(answerObj);
        setTotalCorrectQuestions(totalCorrectQuestions);
        setQuizSubmitted(true);

        // todo : Make API call and add the set_id property
    };

    return (
        <div className="flex flex-col">
            <QuestionList
                attemptedQuestion={attemptedQuestionWithAnswers}
                mcqs={mcqs}
                setCurrentQuestion={setCurrentQuestion}
                quizSubmitted={quizSubmitted}
                answerObj={answerObj}
                currentQuestion={currentQuestion}
            />

            <div className="max-h-64">
                {quizSubmitted ? (
                    <Result
                        mcqLength={mcqs.length}
                        totalCorrectQuestions={totalCorrectQuestions}
                    />
                ) : (
                    <Question
                        setAttemptedQuestionWithAnswers={
                            setAttemptedQuestionWithAnswers
                        }
                        attemptedQuestionWithAnswers={
                            attemptedQuestionWithAnswers
                        }
                        currentMcq={mcqs[currentQuestion]}
                        currentQuestion={currentQuestion}
                    />
                )}
            </div>

            <ActionButtons
                quizSubmitted={quizSubmitted}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                attemptedQuestionLength={
                    Object.keys(attemptedQuestionWithAnswers).length
                }
                mcqLength={mcqs.length}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

QuizSection.propTypes = {
    mcqs: PropTypes.array,
};

export default QuizSection;
