import * as z from 'zod'


export const outlineSchema = z.object({
    courseTitle : z.string(),
    courseSubtitle : z.string(),
    sections : z.array(z.object({
        sectionTitle : z.string(),
        keyPoints : z.array(z.string())
    }))
})

export const feedbackSchema = z.object({
    feedback : z.string(),
})


export const scriptSchema = z.object({
    script : z.string(),
    sectionTitle : z.string(),
})


export const questionSchema = z.object({
    question : z.string(),
    answer : z.string(),
    options : z.array(z.string())
})

export const courseSchema = z.object({
    courseTitle : z.string(),
    courseSubtitle : z.string(),
    sections : z.array(z.object({
        sectionTitle : z.string(),
        keyPoints : z.array(z.string()),
        smallPara : z.string(),
        script : z.string(),
        stableDiffusionPrompts : z.array(z.string())
    })),
    quizQuestions : z.array(questionSchema) 
})
