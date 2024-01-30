import QuestionList from "./QuestionList";
import Question from "./Question";
import ActionButtons from "./ActionButtons";

const QuizSection = () => {
    return (
        <div className="flex flex-col">
            <QuestionList />
            <Question />
            <ActionButtons />
        </div>
    );
};

export default QuizSection;
