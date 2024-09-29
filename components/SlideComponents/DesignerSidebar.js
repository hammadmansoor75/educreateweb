import React from 'react'
import SidebarBtnElement from './SidebarBtnElement'
import { FaHeading } from "react-icons/fa"
import { IoText } from "react-icons/io5";
import { LuHeading2 } from "react-icons/lu";
import { useDroppable } from '@dnd-kit/core';



function DesignerSidebar() {
  const {attributes,listeners, setNodeRef, transform} = useDroppable({
    id : 'draggable-btn'
  })
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;
  return (
    <aside className='w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-slate-900 overflow-y-auto h-full' >
        <SidebarBtnElement ref={setNodeRef} style={style} {...listeners} {...attributes} label="Text" type='text' icon={<IoText size={35} />} />
        <SidebarBtnElement label="Heading" type='text' icon={<FaHeading size={35} />} />
        <SidebarBtnElement label="SubHeading" type='text' icon={<LuHeading2 size={35} />} />
    </aside>
  )
}

export default DesignerSidebar
