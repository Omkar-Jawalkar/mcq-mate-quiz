import { useEffect, useState } from "react";
import QuizSection from "../../components/QuizSection/QuizSection";
import axios from "axios";
import SelectQuizToStart from "../../components/SelectQuizToStart";

const Home = () => {

    const baseUrl = 'https://mcqmate.com'
    // const baseUrl = 'http://localhost:8000'

    // required for making first api call for getting test data
    // this will be provided by attribute data binding 
    const [initData, setInitData] = useState({
        topicId: null,
        chapterId: null,
    });

    const [sets, setSets] = useState([]);
    const [attempts, setAttempts] = useState({});
    const [mcqs, setMcqs] = useState([]);
    const [attempted, setAttempted] = useState(false);
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    useEffect(() => {
        if (initData.topicId == null) {
            return;
        }

        axios.get(`${baseUrl}/api/topics/${initData.topicId}/test-series`)
            .then(response => {
                console.log(response.data);
                setSets(response.data.data.sets);
                // setAttempts(response.data.data.attempts);
            })
            .catch(error => {
            });


    }, [initData]);

    const startQuiz = (quizStartData) => {
        console.log("Starting quiz with:", quizStartData);

        // Ask for confirmation
        const confirmed = window.confirm("Are you sure you want to start the quiz?");

        // todo disable tab navigation bar

        if (confirmed) {
            console.log("Starting quiz with:", quizStartData);

            if (quizStartData.type == 'test-series') {
                axios.get(`${baseUrl}/api/topics/${initData.topicId}/test-series/${quizStartData.seriesId}/mcqs`)
                    .then(response => {
                        console.log(response.data);
                        setMcqs(response.data.data.mcqs);
                        // setAttempts(response.data.data.attempts);
                    })
                    .catch(error => {
                    });
                setIsQuizStarted(true)
            } else if (quizStartData.type == 'random-mcqs') {
                axios.get(`${baseUrl}/api/topics/${initData.topicId}/mcqs/random?total_mcqs=${quizStartData.totalMcqs}`)
                    .then(response => {
                        console.log(response.data);
                        setMcqs(response.data.data.mcqs);
                        // setAttempts(response.data.data.attempts);
                    })
                    .catch(error => {
                    });
                setIsQuizStarted(true)
            }
        } else {
            console.log("Quiz start canceled by user.");
        }
    };

    useEffect(() => {
        // get this from attributes
        // !hardcoded
        setInitData({
            topicId: 185,
            chapterId: null
        });
    }, []);

    return (
        <div className="max-w-5xl mx-auto rounded-sm">
            <SelectQuizToStart sets={sets} isQuizStarted={isQuizStarted}
                attempts={attempts}
                onStartQuiz={startQuiz}
            />
            <QuizSection
                mcqs={mcqs}
                attempted={attempted}
                setAttempted={setAttempted}
            />
        </div>
    );
};

export default Home;
