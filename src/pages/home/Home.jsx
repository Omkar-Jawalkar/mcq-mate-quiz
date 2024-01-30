import { useEffect, useState } from "react";
import QuizSection from "../../components/QuizSection/QuizSection";
import QuizSetSection from "../../components/QuizSetSection/QuizSetSection";
import { QuizDataGetMock } from "../../data/QuizDataGetMock";
const Home = () => {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        setQuizData(QuizDataGetMock);
    }, []);

    useEffect(() => {
        console.log(quizData);
    }, [quizData]);

    return (
        <div className="flex space-y-6 flex-col">
            <QuizSetSection />
            <QuizSection />
        </div>
    );
};

export default Home;
