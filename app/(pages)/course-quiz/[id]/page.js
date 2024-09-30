"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

const CourseQuiz = () => {
    const [loading, setLoading] = useState(false);
    const [quiz, setQuiz] = useState({ questions: [], answers: {} });
    const [submissionStatus, setSubmissionStatus] = useState(false);
    const [feedback,setFeedback] = useState(null)
    const [score, setScore] = useState(null);

    useEffect(() => {
        const getQuizByCourseId = async (courseId) => {
            try {
                setLoading(true);
                const response = await axios.post('/api/get-quiz', { id: courseId });
                const quizQuestions = response.data.quizQuestions;

                const initialAnswers = quizQuestions.reduce((acc, question) => {
                    acc[question.id] = ''; // Empty string for no selected answer
                    return acc;
                }, {});

                setQuiz({ questions: quizQuestions, answers: initialAnswers });
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
            }
        };

        if (typeof window !== 'undefined') {
            const urlPath = window.location.pathname;
            const idFromPath = urlPath.split("/").pop();
            if (idFromPath) {
                getQuizByCourseId(idFromPath);
            }
        }
    }, []);

    const calculateScore = () => {
        const correctAnswersCount = quiz.questions.reduce((count, question) => {
            if (quiz.answers[question.id] === question.answer) {
                return count + 1;
            }
            return count;
        }, 0);

        const totalQuestions = quiz.questions.length;
        return (correctAnswersCount / totalQuestions) * 100;
    };

    const handleOptionChange = (questionId, selectedOption) => {
        setQuiz((prevQuiz) => ({
            ...prevQuiz,
            answers: {
                ...prevQuiz.answers,
                [questionId]: selectedOption,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        

        const incorrectAnswers = quiz.questions.filter(question => quiz.answers[question.id] !== question.answer);
        let prompt = "The user answered the following questions incorrectly in a quiz. Provide feedback on these topics and suggest how they can improve in these areas:\n\n";

        incorrectAnswers.forEach((question, index) => {
            prompt = prompt.concat(
                `${index + 1}. Question: ${question.question}\n`,
                `Selected Answer: ${quiz.answers[question.id]}\n`,
                `Correct Answer: ${question.answer}\n\n`
            );
        });

        prompt = prompt.concat("Please provide feedback and advice on how to improve. The response should be a paragraph and it should not include the quiz questions again just provide an overall feedback and improvements.");

        prompt.toString();
        const score = calculateScore();
        setScore(score);
        
        try {
            const response = await axios.post('/api/submit-quiz', { prompt : prompt });
            setFeedback(response.feedback)
            // handle response and update submissionStatus if needed
        } catch (error) {
            console.log(error);
            setFeedback("Something went wrong while submitting the quiz");
        } finally {
            setLoading(false);
            setSubmissionStatus(true)
        }
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
            <h1 className='text-3xl font-semibold text-center mb-6'>Quiz</h1>
            <form className='space-y-8' onSubmit={handleSubmit}>
                {quiz.questions.map((question, index) => (
                    <div key={question.id} className="p-5 bg-white rounded-lg shadow-md">
                        <h2 className='font-bold text-lg mb-3'>
                            {index + 1}. {question.question}
                        </h2>
                        <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                                <label key={optionIndex} className='flex items-center'>
                                    <input
                                        type='radio'
                                        name={`question-${question.id}`}
                                        value={option}
                                        className='mr-2'
                                        checked={quiz.answers[question.id] === option}
                                        onChange={() => handleOptionChange(question.id, option)}
                                    />
                                    <span className="text-gray-800">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition"
                >
                    Submit Quiz
                </button>
                {submissionStatus && (
                    <div className="mt-4 text-center text-gray-700">
                        <h1>Score : {score}</h1>
                        <p>Feedback: {feedback}</p>
                    </div>
                )}
            </form>
                
        </div>
    );
};

export default CourseQuiz;
