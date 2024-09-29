"use client"
import {DragOverlay, useDndMonitor, Active } from '@dnd-kit/core'
import React,{useState} from 'react'
import { SidebarBtnElementOverlay } from './SidebarBtnElement';

function DragOverlayWrapper() {
    const [draggedItem, setDraggedItem] = useState(null);
    useDndMonitor({
        onDragStart : (event) => {
            setDraggedItem(event.active);
        },
        onDragCancel : () => {
            setDraggedItem(null)
        },
        onDragEnd : () => {
            setDraggedItem(null)
        } 
    })
    if(!draggedItem) return null;
    let node = <div>No Drag Overlay</div>
    const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;
    if(isSidebarBtnElement){
        const type = draggedItem.data?.current?.type
        node = <SidebarBtnElementOverlay/> 
    }
  return (
    <DragOverlay>{node}</DragOverlay>
  )
}

export default DragOverlayWrapper
