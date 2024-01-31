import { useEffect, useState } from "react";

const Result = ({ mcqLength, totalCorrectQuestions }) => {
    const [finalPercentage, setFinalPercentage] = useState(null);
    const calculatePercentage = (scoredMarks, totalMarks) => {
        return ((scoredMarks / totalMarks) * 100).toFixed(2);
    };

    useEffect(() => {
        setFinalPercentage(() => {
            return calculatePercentage(totalCorrectQuestions, mcqLength);
        });
    }, []);

    return (
        <div className="w-full py-12 space-y-6 flex flex-col  justify-center items-center">
            <h1 className="text-4xl"> Results </h1>

            <h2
                className={`${
                    finalPercentage < 28 ? "text-red-600" : "text-green-600"
                } text-lg`}
            >
                {finalPercentage < 28
                    ? "Oops! You Failed "
                    : "Congrulations 🎉🎉🎉"}
                {calculatePercentage(totalCorrectQuestions, mcqLength)}%
            </h2>

            <span className="text-sm">
                You Scored {totalCorrectQuestions}/{mcqLength}
            </span>
        </div>
    );
};

export default Result;
