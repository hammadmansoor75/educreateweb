import { ChatOpenAI } from "@langchain/openai";
import { courseSchema, feedbackSchema, scriptSchema } from "./schemas";
import OpenAI from "openai"


export const generateCourse = async (formData) => {

    const courseLength = formData.courseLength;
    let tokens;

    if(courseLength === 'Large' || courseLength === 'large'){
        tokens = 4000
    }else{
        tokens = 2500
    }

    const chatModel = new ChatOpenAI({
        apiKey : process.env.OPENAI_API_KEY,
        model : 'gpt-4-turbo',
        temperature : 0.7,
        maxTokens : tokens,
    })

    const structuredCourse =  chatModel.withStructuredOutput(courseSchema)

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



export const generateVideoScripts = async (course) => {
    const chatModel = new ChatOpenAI({
        apiKey : process.env.OPENAI_API_KEY,
        model : 'gpt-4-turbo',
        temperature : 0.7,
        maxTokens : 2500,
    })

    const structuredScripts = chatModel.withStructuredOutput(scriptSchema)
    
    let scriptsArray = [];
    const prompt = `You are tasked with generating a script for a video based on the following input parameters. The output should be in JSON format with a structured schema. The sectionTitle in the output should be "Introduction" and the script in the output should be the script you will generate based on the instructions given. Generate a natural, conversational introductory script for the video-based course titled '${course.courseTitle}', with the subtitle '${course.courseSubtitle}'. The script should provide a warm and engaging introduction to the course, highlighting its key learning objectives and giving learners a clear understanding of what to expect. The tone should feel like a real instructor or teacher is speaking directly to the audience, rather than a scripted or robotic delivery. Ensure the language flows smoothly, using appropriate punctuation and natural breaks for clarity, but do not include stage directions like '[Narrator]', '[Pause]', '[Background Music Playing] or any references to music or additional instructions. Just provide the script in a paragraph without any instructions. The script should just include the words that the teacher is speaking. NO EXTRA INSTRUCTIONS OR ANYTHING ELSE The script should avoid over-explaining or adding unnecessary instructions that a text-to-speech API might misinterpret. Focus on creating a welcoming and informative atmosphere, as though someone is personally guiding the learners through the course, without any artificial or technical language.`
    
    const response = await structuredScripts.invoke(prompt)
    // console.log(response);
    scriptsArray.push(response);

    const sectionScripts = await Promise.all(
        course.sections.map(async (section) => {
            const prompt = `The output should be structured in JSON Format. The "sectionTitle" in the output should be ${section.sectionTitle}. Generate a conversational and smooth script for the section '${section.sectionTitle}' of the course titled '${course.courseTtitle}'. Include the following details: ${section.small_para}. Key points to cover: ${section.keyPoints}. Start the script with a natural transition like 'Moving on to this section,' or 'Next, we’ll focus on,' avoiding introductions like 'Welcome to this section.' The tone should feel like a teacher or instructor is explaining the content naturally, with engaging and clear explanations. Ensure that the text is suitable for a text-to-speech API by using appropriate punctuation and pauses, but avoid adding any artificial elements like '[Pause]' or '[Music]'. Just provide a script in a paragraph without including any stage directions. Stage directions are bannned. The script should just include the words that the teacher is speaking. NO EXTRA INSTRUCTIONS OR ANYTHING ELSE. The script should flow smoothly, focusing on delivering the content as though it’s being explained in real time by a knowledgeable instructor. Avoid robotic phrasing, over-explaining, or adding unnecessary clarifications, ensuring the content feels authentic and engaging for learners.`
            const mapResponse = await structuredScripts.invoke(prompt);
            // console.log(mapResponse);
            return mapResponse;

        })
    )

    scriptsArray = scriptsArray.concat(sectionScripts)
    return scriptsArray;

}





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














