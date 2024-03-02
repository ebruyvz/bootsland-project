export default function CSLP() {
    return (
      <div className="md:flex md:flex-wrap md:stretch-items md:max-lg:block mb-20">
        <img src="https://bootsland.themeht.com/wp-content/uploads/2023/03/03.png" className="pt-20 w-[70%] md:max-lg:w-[70%] md:max-lg:mx-auto md:w-[50%] md:h-fit md:ml-0 mx-auto" />
        <div className="md:w-[50%] md:max-lg:w-[70%] md:max-lg:ml-[50px] mt-0">
            <div className="bg-blue-100 rounded-md w-[50px] h-[50px] ml-8 flex justify-center items-center mt-12 font-semibold text-xl text-blue-600 md:ml-20 md:max-lg:mt-32">
                <h1 className="animate-[rotate_5s_ease-in-out_infinite]">!</h1>
            </div>
            <h1 className="ml-8 text-5xl w-fit my-5 md:ml-20">We're A Creative Software Landing Page</h1>
            <p className="ml-8 text-gray-400 w-full text-xl md:ml-20">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <ul className="ml-8 mb-12 mt-5 text-gray-400 space-y-4 text-left text-gray-400 md:grid md:grid-cols-2 md:ml-20">
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 text-blue-600 bg-blue-100 w-8 h-8 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 0 20 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Fully Responsive</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 text-blue-600 bg-blue-100 w-8 h-8 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 0 20 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Built With Elementor</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 text-blue-600 bg-blue-100 w-8 h-8 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 0 20 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Based On Bootstrap 5</span>
                </li>
                <li className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 text-blue-600 bg-blue-100 w-8 h-8 p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 0 20 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>SVG Icon</span>
                </li>
            </ul>
            <a href="https://bootsland.themeht.com/#" className="ml-8 md:ml-20">
                <button className="mb-12 border p-3 text-blue-700 border-blue-700 rounded-md transition ease-in-out delay-150 hover:bg-orange-500 duration-300 hover:text-white hover:border-white active:text-red-500">Learn More</button>
            </a>
        </div>
      </div>
    );
}
