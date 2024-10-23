"use client";

import { useState } from "react";
import { useCourse } from "@/providers/CourseProvider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AddQuestionForm = () => {
  const { addNewQuestion } = useCourse();
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: "",
    options: ["", "", "", ""], // Placeholder for 4 options
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id.startsWith("option")) {
      const index = parseInt(id.replace("option", "")) - 1;
      const updatedOptions = [...newQuestion.options];
      updatedOptions[index] = value;
      setNewQuestion((prev) => ({
        ...prev,
        options: updatedOptions,
      }));
    } else {
      setNewQuestion((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled out
    if (
      !newQuestion.question ||
      !newQuestion.answer ||
      newQuestion.options.some((opt) => !opt)
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Ensure the correct answer exists within the options
    const correctAnswerIndex = newQuestion.options.findIndex(
      (option) => option === newQuestion.answer
    );
    if (correctAnswerIndex === -1) {
      alert("The correct answer must match one of the provided options.");
      return;
    }

    addNewQuestion(newQuestion);

    // Reset form fields
    setNewQuestion({
      question: "",
      answer: "",
      options: ["", "", "", ""],
    });

    // Close the dialog after submission
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
          Add Question
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create Question</DialogTitle>
            <DialogDescription>
              Add a new question for your course.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="question" className="text-right">
                Question
              </Label>
              <Input
                id="question"
                className="col-span-3"
                placeholder="Enter your question here"
                value={newQuestion.question}
                onChange={handleInputChange}
              />
            </div>

            {newQuestion.options.map((option, index) => (
              <div className="grid grid-cols-4 items-center gap-4" key={index}>
                <Label htmlFor={`option${index + 1}`} className="text-right">
                  Option {index + 1}
                </Label>
                <Input
                  id={`option${index + 1}`}
                  className="col-span-3"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={handleInputChange}
                />
              </div>
            ))}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="answer" className="text-right">
                Correct Answer
              </Label>
              <Input
                id="answer"
                className="col-span-3"
                placeholder="Type the correct option text"
                value={newQuestion.answer}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuestionForm;
