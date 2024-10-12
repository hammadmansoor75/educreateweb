"use client";
import {DataTable} from './data-table';
import {columns} from './columns'
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios'


const Page = () => {

    const {data:session,status} = useSession();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === "authenticated" && session?.user?.id) {
          // Fetch courses when user is authenticated and userId is available
          const fetchCourses = async () =>  {
            try {
              const response = await axios.post('/api/get-courses', {userId : session.user.id})
              // const result = await response.json();
              console.log(response.data)
    
              if (response.status === 200 ) {
                setCourses(response.data.data);
                console.log(response.data);
              } else {
                console.error("Error fetching courses:", response.error);
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
                <h3 className='text-xl' >{"Empower yourself through knowledge"}</h3>
            </div>
            <div className='mt-5' >
                <DataTable columns={columns} data={courses} ></DataTable>
            </div>
        </div>
    )
}


export default Page;