"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

const CourseQuiz = () => {
    const [loading, setLoading] = useState(false);
    const [quiz, setQuiz] = useState({ questions: [], answers: {} });
    const [submissionStatus, setSubmissionStatus] = useState(null);

    useEffect(() => {
        const urlPath = window.location.pathname;
        const idFromPath = urlPath.split("/").pop();

        const getQuizByCourseId = async (courseId) => {
            try {
                setLoading(true);
                const response = await axios.post('/api/get-quiz', { id: courseId });
                const quizQuestions = response.data.quizQuestions;
                console.log("Quiz Questions: ",quizQuestions)
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

        if (idFromPath) {
            getQuizByCourseId(idFromPath);
        }
    }, []);

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
        try {
            const response = await axios.post('/api/submit-quiz', { answers: quiz.answers });
            setSubmissionStatus(response.data.message); // Assuming the API returns a message
        } catch (error) {
            console.error("Error submitting quiz:", error);
            setSubmissionStatus("Submission failed. Please try again.");
        } finally {
            setLoading(false);
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
                        {submissionStatus}
                    </div>
                )}
            </form>
        </div>
    );
}

export default CourseQuiz;
