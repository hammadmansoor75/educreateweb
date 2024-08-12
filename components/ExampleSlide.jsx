import { FaArrowRight } from "react-icons/fa6";

const ExampleSlide = ({courseName, courseImage, courseTagline}) => {
    return (
        <div>
            <div className="min-h-40" style={{ backgroundImage: `url(${courseImage})`, backgroundSize: 'cover'}} >
                <button className="flex items-center justify-center gap-2 bg-examplePurpleBtn p-2 rounded-md">View Course <span><FaArrowRight/></span></button>
                <h2 className="text-white text-2xl">{courseTagline}</h2>
                <h1 className="bg-examplePurpleBtn w-full text-3xl text-white font-bold">{courseName}</h1>
            </div>
        </div>
    )
}


export default ExampleSlide;