import { cn } from "@/lib/utils";

const QuizQuestion = ({question,qno}) => {
    const questionAsked = question.question;
    const options = question.options;
    const answer = question.answer;
    return(
        <div className="border border-purple-500 bg-inherit px-5 md:px-20 py-5 rounded-lg w-full">
            <h1 className="text-green-500 font-semibold">Question : {qno} </h1>
            <h1 className="bg-blue-400 py-4 px-3 mt-5 ">{questionAsked}</h1>
            {options.map((option,index) => (
                <label key={index} className={cn("flex items-center justify-start gap-2 mt-3 dark:bg-black dark:text-white p-3", answer === option ? 'bg-green-500' : '')}  >
                    <input type="radio" className="form-radio text-black dark:text-blue-600" />
                    <span className="text-sm">{option}</span>
                </label>
            ))}
        </div>
    )
}



export default QuizQuestion