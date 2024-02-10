import { useEffect, useState } from "react";
import QuizSection from "../../components/QuizSection/QuizSection";
import QuizSetSection from "../../components/QuizSetSection/QuizSetSection";
import { QuizDataGetMock } from "../../data/QuizDataGetMock";
const Home = () => {
    const [sets, setSets] = useState([]);
    const [attempts, setAttempts] = useState([]);
    const [mcqs, setMcqs] = useState([]);
    const [attempted, setAttempted] = useState(false);

    useEffect(() => {
        setSets(QuizDataGetMock?.data?.sets);
        setAttempts(QuizDataGetMock?.data?.attempts);
        setMcqs(QuizDataGetMock?.data?.mcqs);
    }, []);

    // useEffect(() => {
    //     console.log(quizData);
    // }, [quizData]);

    return (
        <div className="max-w-5xl mx-auto border rounded-sm">
            <QuizSetSection sets={sets} attempts={attempts} />
            <QuizSection
                mcqs={mcqs}
                attempted={attempted}
                setAttempted={setAttempted}
            />
        </div>
    );
};

export default Home;
