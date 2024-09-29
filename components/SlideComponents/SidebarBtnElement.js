import React from 'react'
import { Button } from '../ui/button'
import { useDroppable } from '@dnd-kit/core'
import { cn } from '@/lib/utils'

function SidebarBtnElement({icon,label,type}) {
    const draggable = useDroppable({
        id : `designer-btn-${type}`,
        data : {
            type:type,
            isDesignerBtnElement: true
        }
    })
  return (
    <Button ref={draggable.setNodeRef} {...draggable.listeners} {...draggable.attributes} variant={"outline"} className={cn("flex flex-col gap-2 h-[120px] w-[120px] cursor-grab",draggable.isDragging && "ring-2 ring-primary")}>
        <span className='h-8 w-8 text-primary cursor-grab'>{icon}</span>
        <p className='text-xs' >{label}</p>
    </Button>
  )
}

export default SidebarBtnElement


export function SidebarBtnElementOverlay({icon,label,type}) {
  return (
    <Button variant={"outline"} className="flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" >
        <span>{icon}</span>
        <p className='text-xs' >{label}</p>
    </Button>
  )
}
