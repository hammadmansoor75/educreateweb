import { FaRegCheckCircle } from "react-icons/fa";

const LearningObjectives = ({sections}) => {
    return(
        <div className="bg-slate-100 p-5 rounded-lg border-green-500 w-full md:w-2/5 mt-5 md:mt-0" >
            <h1 className='font-semibold text-center mb-5 text-black'>Skills you will learn in this course</h1>
            <div className="space-y-2" >
                {sections.map((section,index) => (
                    <div key={index} className='flex items-start justify-start gap-2' >
                        <FaRegCheckCircle size={20} className='text-green-500 rounded-lg font-semibold' />
                        <p className='text-sm text-black' >You will learn {section.sectionTitle}.</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default LearningObjectives;