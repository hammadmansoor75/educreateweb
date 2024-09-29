"use client"
import { useDroppable } from "@dnd-kit/core";
import DesignerSidebar from "./DesignerSidebar";
import { Rnd } from "react-rnd";

const Designer = ({imageUrl, section}) => {
    const {isOver,setNodeRef} = useDroppable({
        id:"designer-drop-area",
        data : {
            isDesignerDropArea : true
        }
    })
    return (
        <div className="flex w-full h-full" >
            <div className="p-4 w-full">
                <div ref={setNodeRef} className="bg-slate-800 max-w-[920px] min-h-[500px] rounded-xl h-full m-auto flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto" style={{backgroundImage : `url(${imageUrl})`, backgroundSize : 'cover', backgroundPosition : 'center'}} >
                <Rnd
                    className="bg-white rounded-lg px-6 py-4"
                    default={{
                        x:100,
                        y:100,
                        width:400, 
                        height:200
                    }}
                    minWidth={200}
                    minHeight={100}
                    bounds="parent"
                >
                    <h2 className="border border-blue-900 px-6 py-2 rounded-full font-bold text-md" contentEditable={true} >{section.sectionTitle}</h2>
                    <p className="mt-3 text-sm px-4 py-2 text-black" contentEditable={true} >{section.smallPara}</p>
                </Rnd>
                </div>
            </div>
            <DesignerSidebar/>
        </div>
    )
}

export default Designer;