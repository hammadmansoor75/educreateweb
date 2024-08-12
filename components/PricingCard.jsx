import PricingFeature from "./PricingFeature";
const PricingCard = ({packageName, packagePrice, packageDesc, features}) => {
    return (
        <div class="border-gray-600 rounded-2xl border  divide-y divide-gray-200 max-w-xs"
            style={{boxShadow : 'rgba(45, 50, 130, 0.15) 0px 12px 16px -4px, rgba(45, 50, 130, 0.15) 0px 4px 6px -2px'}}>
                <div class="p-4">
                    <div class="flex justify-between">
                         <h2 class="text-md font-semibold text-gray-600 dark:text-white">{packageName}</h2>
                    </div>
                    <p class="mt-4">
                        <span class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">${packagePrice}</span>
                        <span class="text-base font-medium text-gray-500">/mo</span>
                    </p>
                    <p class="mt-0.5 text-sm text-gray-500">{packageDesc}</p>
                    
                    <a href="#" target="_blank"
                    class="flex justify-center w-full py-3 mt-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring">Get
                    started</a>
                </div>
                <div class="px-6 pt-6 pb-8">
                <h3 class="text-sm font-medium text-black dark:text-white">Features</h3>
                <PricingFeature features={features} />
                
    </div>
</div>
    )
}


export default PricingCard;