'use client'
import axios from "axios";
import Image from "next/image"
import {Rnd} from 'react-rnd'
import {useState,useEffect,forwardRef} from 'react'
import { Button } from "./ui/button";
import html2canvas from 'html2canvas'
import { useCourse } from "@/providers/CourseProvider";

const ContentCreationSlide = forwardRef( (props,ref) => {
    const {section,sectionIndex} = props
    const imagePrompt = section.stableDiffusionPrompts[0];
    const [imagePath,setImagePath] = useState(section.backgroundImageUrl || '/assets/featureCourse1.jpg')
    const [loading,setLoading] = useState(false);
    const [uploadedImages, setUploadedImages] = useState(section.previewImages || []);
    const [sectionTitle, setSectionTitle] = useState(section.sectionTitle);
    const [smallPara, setSmallPara] = useState(section.smallPara);
    const {updateSectionImages, updateSectionPositionAndSize, updateSectionContent} = useCourse();
    const [rndImageUrl, setRndImageUrl] = useState(null);

    const handlePathChange = (newPath) => {
        setImagePath(newPath);
        updateSectionImages(sectionIndex, newPath, uploadedImages);
    }


    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if(file){
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'educreatepreset');

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dsq7wjcnz/image/upload', 
                    formData
                );

                if (response.status === 200) {
                    const imageUrl = response.data.secure_url;
                    setImagePath(imageUrl);

                    // Add the new image to the preview images
                    setUploadedImages((prevImages) => {
                        const updatedImages = [...prevImages, imageUrl];
                        if (updatedImages.length > 4) {
                            return updatedImages.slice(-4); // Keep only the last 4 images
                        }
                        return updatedImages;
                    });

                    // Update the context with the new image
                    // const rndComponentImage = await CaptureAndUpload();
                    updateSectionImages(sectionIndex, imageUrl, [...uploadedImages,imageUrl]);
                }
            } catch (error) {
                console.error('Error uploading image to Cloudinary:', error);
            }
        }
    }

    const generateImage = async () =>{
        setLoading(true);
        try{
            const response = await axios.post('/api/replicate-image', {prompt : imagePrompt});
            if(response.status === 200){
                const newImages = response.data.imageUrls;

                const cloudinaryUploads = newImages.map(async(imageUrl) => {
                    const formData = new FormData();
                    formData.append("file",imageUrl);
                    formData.append("upload_preset","educreatepreset");

                    const cloudinaryResponse = await axios.post(
                        'https://api.cloudinary.com/v1_1/dsq7wjcnz/image/upload',
                        formData
                    )
                    return cloudinaryResponse.data.secure_url;
                })

                const uploadedCloudinaryUrls = await Promise.all(cloudinaryUploads);
                setImagePath(uploadedCloudinaryUrls[0]);

                setUploadedImages((prevImages) => {
                    const updatedImages = [...prevImages, ...uploadedCloudinaryUrls];
            
                    // If the total images exceed 4, remove the oldest images
                    if (updatedImages.length > 4) {
                      return updatedImages.slice(-4); // Keep only the last 4 images
                    }
                    return updatedImages;
                  });
                // Update the context with the new image
                // const rndComponentImage = await CaptureAndUpload();
                updateSectionImages(sectionIndex, uploadedCloudinaryUrls[0], [...uploadedImages,...uploadedCloudinaryUrls]);
            }
        }catch(error){
            console.log('Error generating or uploading image:', error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(!section.backgroundImageUrl){
            generateImage();
        }
        console.log('Testing Use Effect')
    },[]);

    const dataUrlToBlob = (dataUrl) => {
        const arr = dataUrl.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    };

    // const CaptureAndUpload = async () => {
    //     const rndElement = document.getElementById(`rnd-container-${sectionIndex}`)
    //     try{
    //         const canvas = await html2canvas(rndElement);
    //         const dataUrl = canvas.toDataURL("image/png");
    //         setRndImageUrl(dataUrl);
    //         const blob = dataUrlToBlob(dataUrl);

    //         const formData = new FormData();
    //             formData.append('file',blob);
    //             formData.append('upload_preset', 'educreatepreset')
    //             const cloudinaryResponse = await axios.post(
    //                 'https://api.cloudinary.com/v1_1/dsq7wjcnz/image/upload',
    //                 formData,
    //                 {
    //                     headers: {
    //                         'Content-Type': 'multipart/form-data',
    //                     },
    //                 }
    //             )
    //         const cloudinaryUrl = cloudinaryResponse.data.secure_url;
    //         console.log("Image uploaded to cloudinary:", cloudinaryUrl);
    //         return cloudinaryUrl;

    //     }catch(error){
    //         console.log("Error Capturing or Uploading Rnd Component: ", error);
    //     }
    // }

    const handleDragStop = async (e,d) => {
        // const rndComponentImage = await CaptureAndUpload();
        updateSectionPositionAndSize(sectionIndex, d.x, d.y, section.width, section.height);
    }

    const handleResizeStop =async (e,direction, ref, delta, position) =>{
        // const rndComponentImage = await CaptureAndUpload();
        updateSectionPositionAndSize(sectionIndex,position.x,position.y,ref.offsetWidth, ref.offsetHeight)
    }

    const handleTitleChange = async (e) => {
        const newTitle = e.target.innerText;
        setSectionTitle(newTitle);
        // const rndComponentImage = await CaptureAndUpload();
        updateSectionContent(sectionIndex,newTitle, smallPara)
    }

    const handleParaChange = async (e) => {
        const newPara = e.target.innerText;
        setSmallPara(newPara);
        // const rndComponentImage = await CaptureAndUpload();
        updateSectionContent(sectionIndex, sectionTitle, newPara);
    }


    return (
        <div className="mt-10 md:flex items-center justify-between md:px-10 gap-5">
            <div className="relative w-[800px] h-[500px] bg-cover bg-center rounded-xl" style={{backgroundImage : `url(${imagePath})`}} >
                <Rnd
                    ref={ref}
                    id={`rnd-container-${sectionIndex}`}
                    className="bg-white rounded-lg px-6 py-4 bg-opacity-50 border-white/20 backdrop-blur-sm"
                    default={{
                        x:section.x,
                        y:section.y,
                        width:section.width, 
                        height:section.height
                    }}
                    minWidth={200}
                    minHeight={100}
                    bounds="parent"
                    onDragStop={handleDragStop}
                    onResizeStop={handleResizeStop}
                >
                    <h2 className="border border-blue-900 px-6 py-2 rounded-full font-bold text-md" contentEditable={true} onBlur={handleTitleChange} >{sectionTitle}</h2>
                    <p className="mt-3 text-sm px-4 py-2 text-black" onBlur={handleParaChange} contentEditable={true} >{smallPara}</p>
                </Rnd>
            </div>
            <div>
                <h1 className="flex items-center justify-center border border-blue-900 px-4 py-2 mb-5" >Select design or generate new image</h1>
                <div className="flex items-center justify-center gap-2" >
                    
                `   <label htmlFor="file-input" className="cursor-pointer">
                        <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" id="file-input" />
                    </label>
                    <Button variant="outline" onClick={() => document.getElementById('file-input').click()}>
                        Upload Photo
                    </Button>
                    
                    <Button variant={'secondary'} onClick={generateImage} disabled={loading} >
                        {loading ? 'Generating...' : 'Generate Image'}
                    </Button>
                </div>
                <div className="bg-white px-6 py-4 overflow-y-auto h-72 w-96 border mt-5 grid grid-cols-2 gap-3 drop-shadow-xl shadow-xl rounded-xl">
                    
                    {uploadedImages && uploadedImages.map((path) => (
                        <Image key={path} src={path} onClick={()=>handlePathChange(path)} alt="image" height={300} width={300}  className="rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    )
})

ContentCreationSlide.displayName = 'ContentCreationSlide'
export default ContentCreationSlide