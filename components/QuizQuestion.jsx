import { useState } from "react";
import { useCourse } from "@/providers/CourseProvider"; // Adjust the path accordingly

const QuizQuestion = ({ question, qno }) => {
  const { editQuizQuestion, deleteQuizQuestion } = useCourse();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedQuestion, setUpdatedQuestion] = useState(question.question);
  const [updatedOptions, setUpdatedOptions] = useState(question.options);
  
  const options = question.options;

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const handleUpdateQuestion = () => {
    const updatedQuizQuestion = {
      ...question,
      question: updatedQuestion,
      options: updatedOptions,
    };
    editQuizQuestion(updatedQuizQuestion); // Update in the provider
    setIsEditing(false); // Close edit mode
  };

  const handleDeleteQuestion = () => {
    deleteQuizQuestion(qno); // Delete in the provider
  };

  return (
    <div className="border border-purple-500 bg-inherit px-5 md:px-20 py-5 rounded-lg w-full">
      <h1 className="text-green-500 font-semibold">Question: {qno}</h1>
      
      {isEditing ? (
        <div>
          <textarea
            className="border border-gray-300 rounded p-2 mt-2 w-full"
            value={updatedQuestion}
            onChange={(e) => setUpdatedQuestion(e.target.value)}
          />
          <h2 className="mt-3">Options:</h2>
          {updatedOptions.map((option, index) => (
            <input
              key={index}
              type="text"
              className="border border-gray-300 rounded p-2 mt-2 w-full"
              value={option}
              onChange={(e) => {
                const newOptions = [...updatedOptions];
                newOptions[index] = e.target.value;
                setUpdatedOptions(newOptions);
              }}
            />
          ))}
          <button onClick={handleUpdateQuestion} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      ) : (
        <div>
          <h1 className="bg-blue-400 py-4 px-3 mt-5">{question.question}</h1>
          {options.map((option, index) => (
            <label key={index} className="flex items-center justify-start gap-2 mt-3 dark:bg-black dark:text-white p-3">
              <input
                type="radio"
                className="form-radio text-black rounded-md dark:text-blue-600"
                name={`question-${qno}`}
                value={index}
                checked={selectedOption === index}
                onChange={() => handleOptionChange(index)}
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
          <div className="mt-3">
            {/* <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</button> */}
            <button onClick={handleDeleteQuestion} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
