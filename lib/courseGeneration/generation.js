import { ChatOpenAI } from "@langchain/openai";
import { courseSchema, outlineSchema, feedbackSchema } from "./schemas";
import OpenAI from "openai"


const chatModel = new ChatOpenAI({
    apiKey : process.env.OPENAI_API_KEY,
    model : 'gpt-4-turbo',
    temperature : 0.7,
    maxTokens : 4000,
})

const structuredOutline = chatModel.withStructuredOutput(outlineSchema);

export const generateOutline = async (formData) => {
    const prompt = `You are assigned the role of an instructor. Your main task is to create course outlines for making courses based on the outline generated. So, generate a course having title ${formData.courseTitle} and a subtitle ${formData.courseSubtitle}. Also keep in mind the learning objectives of the course if provided. ${formData.learningOptions}. The style and tone refers to the style and tone of the course. Keep in mind for generating the outline. The style and tone is ${formData.styleTone}. Also keep in mind the course length. If course length is small generate 5-8 sections, if medium generate 8-12 sections, if large generate 12-15 sections. For this course length is ${formData.courseLength}. Another important input is the audience. The audience of the course is ${formData.courseLevel}. And lastly if pdf is provided, use its content to enhance the course. The output format will be json`
    const response = await structuredOutline.invoke(prompt);
    return response;
}

const structuredCourse =  chatModel.withStructuredOutput(courseSchema)


export const generateCourse = async (formData) => {
    const prompt = `You are tasked with generating a course based on the following input parameters. The output should be in JSON format with a structured schema.

    Input Parameters:

    Course Title: ${formData.courseTitle}
    Course Subtitle: ${formData.courseSubtitle}
    Course Length: ${formData.courseLength} (Small, Medium, Large)
    Course Level: ${formData.courseLevel} (Beginner, Intermediate, Expert)
    Style and Tone: ${formData.styleTone}
    Learning Objectives: ${formData.learningObjectives} (Optional)
    Requirements:

    Course Title and Subtitle: Generate a course title and subtitle based on the provided inputs.
    Sections:
        Determine the number of sections based on the courseLength:
            Small: 5 sections
            Medium: 7-8 sections
            Large: 10 sections
        Generate section titles and content based on the courseLength and courseLevel.
        Ensure the content aligns with the styleTone.
        If Learning Objectives are provided, ensure the course content addresses these objectives.
        If the pdf file is provided. Use the PDF File to enhance the course content if available.
        Each Section:
            Title: A descriptive title for the section.
            Key Points: An array of key points relevant to the section.
            Small Para : A small paragraph briefly explaining the contents of the section. Adjust the length based on the wordiness ${formData.wordiness}. Like there is on presentation slides.
            Script: A detailed explanation of the key points. Adjust the length based on wordiness (e.g., 100-150 words, 150-200 words etc).
            Image Prompts: Provide 5 detailed stable diffusion prompts to generate related background images. The prompts should be clear and concise. The prompts should be crafted in a way that the images generated should reflect the the key points and samll para. The prompts for images should be proffessional so that the images generated are professional. Also consider the tone and style which in this case is ${formData.styleTone}.
        Quiz: Include a set of quiz questions relevant to the course content. Each question should have multiple-choice options and an answer. Each section should have atleast one question`

    const response = await structuredCourse.invoke(prompt);
    return response;
}


const structuredFeedback =  chatModel.withStructuredOutput(feedbackSchema)



export const generateQuizFeedback = async(prompt) => {
    const openai = new OpenAI();
    // console.log(prompt)
    const completion = await openai.chat.completions.create({
        messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
          ],
        model: "gpt-4o-mini",
      });
    
    const feedback = completion.choices[0].message.content
    // console.log(feedback);
    return feedback
}












