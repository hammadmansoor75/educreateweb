
const QuizQuestion = ({qno,question,option1,option2,option3,option4}) => {
    return(
        <div className="border border-purple-500 bg-inherit px-5 md:px-20 py-5 rounded-lg w-full">
            <h1 className="text-green-500 font-semibold">Question : {qno} </h1>
            <h1 className="bg-blue-400 py-4 px-3 mt-5 ">{question}</h1>
            <label className="flex items-center justify-start gap-2 mt-3 bg-green-100 dark:bg-black dark:text-white p-3"  >
                <input type="radio" className="form-radio text-black dark:text-blue-600" />
                <span className="text-sm">{option1}</span>
            </label>
            <label className="flex items-center justify-start gap-2 mt-3" >
                <input type="radio" className="form-radio text-black dark:text-blue-600" />
                <span className="text-sm">{option2}</span>
            </label>
            <label className="flex items-center justify-start gap-2 mt-3" >
                <input type="radio" className="form-radio text-black dark:text-blue-600" />
                <span className="text-sm">{option3}</span>
            </label>
            <label className="flex items-center justify-start gap-2 mt-3" >
                <input type="radio" className="form-radio text-black dark:text-blue-600" />
                <span className="text-sm">{option4}</span>
            </label>
        </div>
    )
}



export default QuizQuestion