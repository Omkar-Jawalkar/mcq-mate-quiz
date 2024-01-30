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
import { useState } from "react";

const Question = ({ currentMcq, setAttemptedQuestionWithAnswers }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    let answers = {
        a: currentMcq?.a,
        b: currentMcq?.b,
        c: currentMcq?.c,
        d: currentMcq?.d,
        e: currentMcq?.e,
    };

    const handleSelectAnswer = (answer) => {
        setAttemptedQuestionWithAnswers();
        setSelectedAnswer(answer);
    };

    return (
        <div className="border w-full justify-center items-center p-6">
            <h2> Q. {currentMcq?.question} </h2>

            <div className=" flex flex-col py-4 space-y-3 ">
                {Object.keys(answers)?.map((key) => {
                    return (
                        answers[key] && (
                            <div key={key} className="space-x-2">
                                <input
                                    onClick={() => {
                                        handleSelectAnswer(key);
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
        </div>
    );
};
Question.propTypes = {
    currentMcq: PropTypes.object,
};
export default Question;
