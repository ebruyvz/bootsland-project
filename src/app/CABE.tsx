export default function CSLP() {
    return (
      <div className="md:flex md:flex-wrap md:flex-row-reverse md:stretch-items md:max-lg:block">
        <img src="https://bootsland.themeht.com/wp-content/uploads/2023/03/06-1.png" className="pt-20 mx-auto w-[70%] md:w-[50%] md:h-fit md:ml-5 md:max-lg:w-[70%] md:max-lg:mx-auto" />
        <div className="md:w-[45%] md:max-lg:w-[90%] md:max-lg:mx-auto">
            <div className="bg-blue-100 rounded-md w-[50px] h-[50px] ml-8 flex justify-center items-center mt-12 font-semibold text-xl text-blue-600 md:ml-20 md:mt-32 p-2">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="animate-[rotate_5s_ease-in-out_infinite]">
                    <line x1="35" y1="0" x2="35" y2="35" stroke="blue" stroke-width="4" />
                    <line x1="65" y1="0" x2="65" y2="35" stroke="blue" stroke-width="4" />
                    <line x1="0" y1="35" x2="35" y2="35" stroke="blue" stroke-width="4" />
                    <line x1="65" y1="35" x2="100" y2="35" stroke="blue" stroke-width="4" />
                    <line x1="0" y1="65" x2="35" y2="65" stroke="blue" stroke-width="4" />
                    <line x1="65" y1="65" x2="100" y2="65" stroke="blue" stroke-width="4" />
                    <line x1="35" y1="65" x2="35" y2="100" stroke="blue" stroke-width="4" />
                    <line x1="65" y1="65" x2="65" y2="100" stroke="blue" stroke-width="4" />
                </svg>
            </div>
            <h1 className="ml-8 text-5xl w-fit my-5 md:ml-20">Bootsland Crafting Creative And Beautiful Experience</h1>
            <p className="ml-8 text-gray-400 text-xl md:ml-20">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <ul className="ml-8 mb-12 mt-5 text-gray-400 space-y-4 text-left text-gray-400 md:ml-20">
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 text-blue-600 bg-blue-100 w-8 h-8 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 0 20 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>We use the latest technologies it voluptatem accusantium doloremqu</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 text-blue-600 bg-blue-100 w-8 h-8 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 0 20 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Bootsland Landing Page Build With Elementor</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 text-blue-600 bg-blue-100 w-8 h-8 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 0 20 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>All types of businesses need access to development</span>
                </li>
            </ul>
            <a href="https://bootsland.themeht.com/#" className="ml-8 md:ml-20">
                <button className="mb-12 border p-3 text-blue-700 border-blue-700 rounded-md transition ease-in-out delay-150 hover:bg-orange-500 duration-300 hover:text-white hover:border-white active:text-red-500">Learn More</button>
            </a>
        </div>
      </div>
    );
}
