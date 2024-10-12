"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {useState} from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import {useSnackbar} from 'notistack'
import { ClipLoader } from "react-spinners";


export function DataTable({ columns, data }) {
  const {enqueueSnackbar} = useSnackbar();
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    // console.log("React Table: ", table.getRowModel().rows)
    const router = useRouter();

    const handleEdit = (courseId) => {
        router.push(`/edit-course/${courseId}`); // Navigate to the edit page with courseId
    };

    const handlePreview = (courseId) => {
      router.push(`/preview-course/${courseId}`); // Navigate to the edit page with courseId
  };

    const handleVideo = async (courseId) => {
      router.push(`/course-video/${courseId}`)
      // try {
      //   const getCourse = await axios.post('/api/get-course',{
      //     id : courseId
      //   })

      //   if(!getCourse){
      //     throw new Error('Cannot find the course')
      //   }

      //   // console.log('Course', getCourse.data.course)
      //   const courseData = getCourse.data.course;
      //   const videoCreation = await axios.post('http://127.0.0.1:8000/create-video',
      //     courseData,{
      //       headers: {
      //         'Content-Type': 'application/json',
      //     },
      //     }
      //   );
      //   console.log("Video Creation Response: ", videoCreation)
      // } catch (error) { 
      //   console.log("Error Creating the Video", error)
      // }
    }
    const [deleteLoading,setDeleteLoading] = useState(false)
    const handleDelete = async (courseId) => {
        try {
          setDeleteLoading(true)
          const response = await axios.delete('/api/delete-course', {
              data: { courseId }
          });

          if (response.status === 200) {
              // Handle success (e.g., show a success message, redirect, or update UI)
              console.log('Course deleted successfully');
              enqueueSnackbar('Course Deleted Successfully!', { variant: 'success' });
              // router.reload();
              // You might want to refresh the list of courses or redirect the user
          } else {
              // Handle non-success status codes
              console.error('Error deleting course:', response.data.error);
              enqueueSnackbar('Something went wrong! Please try again.', { variant: 'error' });
          }
      } catch (error) {
          // Handle error (e.g., show an error message)
          console.error('Error deleting course:', error);
          enqueueSnackbar('Something went wrong! Please try again.', { variant: 'error' });
      }finally{
        setDeleteLoading(false)
      }
    }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead> {/* Serial number header */}
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))
            )}
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
            <TableHead>Preview</TableHead>
            <TableHead>Video</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                <TableCell>{index + 1}</TableCell> {/* Serial number cell */}
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEdit(row.original.courseId)} // Pass course ID to handleEdit
                  >
                    <FiEdit size={20}/>
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(row.original.courseId)} // Pass course ID to handleEdit
                  >
                    {deleteLoading ? <ClipLoader size={20} /> : <AiOutlineDelete size={20} /> }
                    
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    className="text-green-500 hover:underline"
                    onClick={() => handlePreview(row.original.courseId)} // Pass course ID to handleEdit
                  >
                    <FaRegEye size={20} />
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleVideo(row.original.courseId)} // Pass course ID to handleEdit
                  >
                    <CiVideoOn size={20} />
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 5} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
