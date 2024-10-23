"use client";
import {DataTable} from './data-table';
import {columns} from './columns'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {useAuth} from '@clerk/nextjs'


const Page = () => {

    const {isLoaded, isSignedIn, userId} = useAuth();
    const [user, setUser] = useState(null)
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isLoaded && userId) {
          // Fetch courses when user is authenticated and userId is available
          const fetchCourses = async (clerkId) =>  {
            try {
              const getUserResponse = await axios.post('/api/get-user-by-clerkId', {clerkId});
              const user = getUserResponse.data.user;
              const response = await axios.post('/api/get-courses', {userId : user.id})
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
          fetchCourses(userId);
        }
      }, [isLoaded, userId]);

    return(
        <div className="container mx-auto p-10" >
            <div className='flex items-center justify-center flex-col gap-5' >
                <h1 className='text-4xl font-bold' >My Courses</h1>
                <h3 className='text-xl' >{"Empower yourself through knowledge"}</h3>
            </div>
            <div className='mt-5' >
                <DataTable columns={columns} data={courses} setCourses={setCourses} ></DataTable>
            </div>
        </div>
    )
}


export default Page;