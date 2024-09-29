"use client"
import { DndContext } from "@dnd-kit/core";
import { Button } from "../ui/button";
import Designer from "./Designer";
import DragOverlayWrapper from "./DragOverlayWrapper";
import { useState } from "react";

const SlideBuilder = ({section}) => {
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (
        <p>Drag me</p>
    );
    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
          setIsDropped(true);
        }
    }
    return (
        <DndContext onDragEnd={handleDragEnd} >
            <main className="flex flex-col w-full min-h-[100vh]">
                {/* <nav className="flex justify-between border-b p-4 gap-3 items-center bg-slate-700" >
                    <h2 className="truncate font-medium">
                        <span className="text-muted-foreground text-white">Slide Title : {section.sectionTitle}</span>
                    </h2>
                    <div className="flex items-center gap-2" >
                        <Button>Preview</Button>
                        <Button>Save</Button>
                    </div>
                </nav> */}
                <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-sky-100 rounded-xl">
                    <Designer imageUrl={'/assets/featureCourse1.jpg'} section={section} />
                </div>
            </main>
            <DragOverlayWrapper/>
        </DndContext>
    )
}

export default SlideBuilder;