import Image from "next/image"
import { FaPlus } from "react-icons/fa6"


const ContentCreationSlide = () => {
    return (
        <div className="mt-5 flex items-center justify-center gap-5">
            <div>
                <Image src='/assets/contentcreationslide.svg' alt="slide" height={700} width={900}/>
            </div>
            <div>
                <div className="flex items-center justify-start gap-2">
                    <button className='text-black dark:text-white bg-inherit py-2 px-4 border border-purple-500 text-sm'>Select design or generate new image</button>
                    <button className='flex items-center justify-center gap-2 bg-indigo-700 text-white rounded-full py-2 px-4 text-sm' ><FaPlus size={20} /> Generate Image</button>
                </div>
                <Image src='/assets/contentcreationgraphics.svg' alt="graphics" height={500} width={500}/>
            </div>
        </div>
    )
}


export default ContentCreationSlide