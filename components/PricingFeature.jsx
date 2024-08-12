
const PricingFeature = ({ features }) => {
    return (

        <div>
            <ul role="list" className="mt-6 space-y-4">
                {features.map((feature,index) => (
                    <li key={index} class="flex space-x-3">
                    <div class="flex justify-center items-center rounded-full bg-indigo-600 h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-3 w-3 flex-shrink-0 text-white">
                            <path fill-rule="evenodd" d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z" clip-rule="evenodd">
                            </path>
                        </svg>
                    </div>
                    <span class="text-sm text-gray-500">{feature}</span>
                </li>
                ))}
            </ul>
        </div>
    )
}


export default PricingFeature;