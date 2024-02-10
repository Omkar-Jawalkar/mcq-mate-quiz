//  {
//                 id: 77705,
//                 question:
//                     "Rewards offered to labours involved in production, are categorized as:",
//                 a: "Salary",
//                 b: "Fringe benefits",
//                 c: "Wage",
//                 d: "Commission",
//                 e: null,
//                 answer: "c",
//                 instructions: null,
//                 discussion_url:
//                     "https://mcqmate.com/discussion/77705/rewards-offered-to-labours-involved-in-production-are-categorized-as",
//             },
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Question = ({
    currentMcq,
    setAttemptedQuestionWithAnswers,
    attemptedQuestionWithAnswers,
    currentQuestion,
    quizSubmitted,
}) => {
    const [selectedAnswer, setSelectedAnswer] = useState(() => {
        let answered = attemptedQuestionWithAnswers[currentMcq?.id];
        return answered ? answered : null;
    });
    let answers = {
        a: currentMcq?.a,
        b: currentMcq?.b,
        c: currentMcq?.c,
        d: currentMcq?.d,
        e: currentMcq?.e,
    };

    useEffect(() => {
        let answered = attemptedQuestionWithAnswers[currentMcq?.id];
        setSelectedAnswer(answered ? answered : null);
    }, [currentQuestion]);

    const handleSelectAnswer = (answer) => {
        setAttemptedQuestionWithAnswers((prev) => {
            return { ...prev, [currentMcq?.id]: answer };
        });
        setSelectedAnswer(answer);
    };

    return (
        <div className="items-center justify-center w-full p-2 md:p-4" style={{ minHeight: "18rem" }}>
            <h2 className="font-bold">
                Q.{currentQuestion + 1} {currentMcq?.question}
            </h2>
            <div className="flex flex-col gap-4 mt-4">
                {Object.keys(answers)?.map((key) => {
                    let addGreenBackgroundToCorrectAnswer = () => {
                        return quizSubmitted && currentMcq?.answer === key
                            ? "bg-green-500"
                            : "";
                    };

                    let addRedBackgroundToWrongAnswer = () => {
                        return quizSubmitted &&
                            attemptedQuestionWithAnswers[currentMcq?.id] ===
                            key &&
                            attemptedQuestionWithAnswers[currentMcq?.id] !==
                            currentMcq?.answer
                            ? "bg-red-400"
                            : "";
                    };

                    return (
                        answers[key] && (
                            <div
                                key={key}
                                className={`space-x-2 rounded-md px-2 ${addGreenBackgroundToCorrectAnswer()} ${addRedBackgroundToWrongAnswer()}`}
                            >
                                <input
                                    onClick={() => {
                                        if (!quizSubmitted) {
                                            handleSelectAnswer(key);
                                        }
                                    }}
                                    checked={
                                        selectedAnswer === key ? true : false
                                    }
                                    value={true}
                                    type="radio"
                                    name={key}
                                    id={key}
                                />
                                <label htmlFor={key}>{answers[key]}</label>
                            </div>
                        )
                    );
                })}
            </div>

            {quizSubmitted && (
                <span>
                    Discussion :-{" "}
                    <a
                        className="text-blue-800 underline"
                        href={currentMcq?.discussion_url}
                    >
                        Link
                    </a>
                </span>
            )}
        </div>
    );
};
Question.propTypes = {
    currentMcq: PropTypes.object,
};
export default Question;
