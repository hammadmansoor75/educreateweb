import { db } from "@/app/helpers/server-helper";
export async function getCourseById(courseId) {
    try {
      // Retrieve the course by its ID
      const course = await db.course.findUnique({
        where: {
          id: courseId // Filter by course ID
        },
        include: {
          sections: true, // Include related sections
          quizQuestions: true // Include related quiz questions
        }
      });
  
      if (course) {
        console.log('Course retrieved successfully:', course);
      } else {
        console.log('Course not found.');
      }
  
      return course;
    } catch (error) {
      console.error('Error retrieving course:', error);
    //   throw error; // Optionally re-throw the error for further handling
    }
}