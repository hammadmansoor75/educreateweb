"use client";
import {DataTable} from './data-table';
import {columns} from './columns'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';


const Page = () => {

    const {data:session,status} = useSession();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === "authenticated" && session?.user?.id) {
          // Fetch courses when user is authenticated and userId is available
          async function fetchCourses() {
            try {
              const response = await fetch("/api/get-courses", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  userId: session.user.id, // Pass userId in headers
                },
              });
              const result = await response.json();
    
              if (response.ok) {
                setCourses(result.data);
                console.log(result.data);
              } else {
                console.error("Error fetching courses:", result.error);
              }
            } catch (error) {
              console.error("Error fetching courses:", error);
            } finally {
              setLoading(false);
            }
          }
    
          fetchCourses();
        }
      }, [status, session]);

    return(
        <div className="container mx-auto p-10" >
            <div className='flex items-center justify-center flex-col gap-5' >
                <h1 className='text-4xl font-bold' >My Courses</h1>
                <h3 className='text-xl' >"Empower yourself through knowledge"</h3>
            </div>
            <div className='mt-5' >
                <DataTable columns={columns} data={courses} ></DataTable>
            </div>
        </div>
    )
}


export default Page;