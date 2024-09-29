"use client"

import {ColumnDef} from '@tanstack/react-table'


export const columns = [
    {
        accessorKey : "courseId",
        header : "Course Id"
    },
    {
        accessorKey : "courseTitle",
        header : "Course Title"
    },
    {
        accessorKey : "courseSubtitle",
        header : "Course Subtitle"
    },
    {
        accessorKey : "sections",
        header : "Sections"
    },
    {
        accessorKey : "quizQuestions",
        header : "Quiz Questions"
    },
]