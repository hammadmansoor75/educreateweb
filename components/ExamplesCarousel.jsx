import { FaArrowRight } from "react-icons/fa6";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";


const carouselList = [
    {
        courseImage : '/assets/course1.jpg',
        courseName : "Banking and Financial Risks",
        courseTagline : "It's also about creating the best environment."
    },
    {
        courseImage : '/assets/featureCourse1.jpg',
        courseName : "Database",
        courseTagline : "It's also about creating the best environment."
    }
]

const ExampleCarousel = () => {
    return (
        <Carousel className='w-full bg-gray-300 md:p-10 p-4  rounded-lg dark:bg-black dark:border '>
            <h1 className="mb-5 text-3xl hidden md:flex text-center font-semibold text-black dark:text-white">Example Courses</h1>
            <CarouselContent>
                
                {carouselList.map((data,index) => (
                    <CarouselItem key={index} className="md:flex items-center justify-center" >
                        <div className="md:min-h-[400px] md:max-h-[400px] md:min-w-[500px] md:max-w-[500px] rounded-lg h-[400px] w-[300px] flex items-end justify-end flex-col" style={{ backgroundImage: `url(${data.courseImage})`, backgroundSize: 'cover'}} >
                            <div className="p-2 md:p-5">
                                <button className="flex items-center justify-center gap-2 bg-indigo-700 p-2 rounded-md text-white">View Course <span><FaArrowRight/></span></button>
                                <h2 className="text-white text-xl md:text-2xl p-5">{data.courseTagline}</h2>
                            </div>
                            
                            <h1 className="bg-indigo-700 p-5 w-full text-center text-xl md:text-3xl text-white font-bold">{data.courseName}</h1>
                        </div>
                    </CarouselItem>
                ))}
                
            </CarouselContent  >
            <CarouselPrevious  />
            <CarouselNext/>
        </Carousel>
    )
}


export default ExampleCarousel;