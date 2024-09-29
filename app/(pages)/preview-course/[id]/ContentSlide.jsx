"use client"

const ContentSlide = ({section}) => {
    console.log("Section: ", section)
    return (
        <div className="mt-10 md:flex items-center justify-between md:px-10 gap-5" >
            <div className="relative w-[800px] h-[500px] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${section.backgroundImageUrl})`}} >
                <div className="bg-white rounded-lg px-6 py-4 bg-opacity-50 border-white/20 backdrop-blur-sm" 
                    style={{
                        position:'absolute',
                        left: section.x,
                        top : section.y,
                        width : section.width,
                        height : section.height,
                    }}
                >
                    <h2 className="border border-blue-900 px-6 py-2 rounded-full font-bold text-md" >{section.sectionTitle}</h2>
                    <p className="mt-3 text-sm px-4 py-2 text-black" >{section.smallPara}</p>
                </div>
            </div>
            <div>
                <h1>Slide NO 1</h1>
            </div>
        </div>
    )
}


export default ContentSlide;