export default function Header() {
    return (
        <>
            <div className="border bg-white rounded-3xl w-[325px] p-3 mt-48 mb-4 ml-12">
                <h1 className="text-lg"><span className="bg-blue-700 m-3 rounded-3xl text-white p-2 text-sm">New</span>Say Hello To All Bootsland</h1>
            </div>
            <div className="ml-8 md:grid md:grid-cols-2 md:mb-8 md:max-lg:block">
                <div className="md:w-fit">
                    <h1 className="text-6xl my-5 md:ml-8">Let's Work With</h1>
                    <h1 className="text-blue-700 font-bold text-6xl md:ml-8">Bootsland</h1>
                    <p className="w-fit my-8 text-gray-400 text-xl md:w-[90%] md:ml-8">Build a Beautiful, Clean & Modern Design website with Elementor Drag and Drop Page Builder.</p>
                    <div className="flex justify-center w-fit md:ml-8">
                        <a href="https://bootsland.themeht.com/#" className="">
                            <button className="bg-blue-700 p-3 rounded-md text-white transition ease-in-out delay-150 hover:bg-orange-500 duration-300 hover:text-white hover:border-white active:text-orange-500">Learn More</button>
                        </a>
                        <a href="https://bootsland.themeht.com/#" className="ml-4">
                            <button className="border p-3 text-blue-700 border-blue-700 rounded-md transition ease-in-out delay-150 hover:bg-orange-500 duration-300 hover:text-white hover:border-white active:text-orange-500">Get Started</button>
                        </a>
                    </div>
                </div>
                <img src="https://bootsland.themeht.com/wp-content/uploads/2023/03/08.png" className="mt-5" />
            </div>
            <div className="h-[80px] bg-black py-3">
                <div className="mb-12 bg-black animate-[my-animation_15s_ease-in-out_forwards_infinite] md:animate-[my-animation-medium_15s_ease-in-out_forwards_infinite] text-white text-5xl">
                    <span className="bg-black after:content-['✨'] after:p-4 pl-3">Creativie</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Saas</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Software</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Agency</span>
                    <span className="bg-black after:content-['✨'] after:p-4">Marketing</span>
                    <span className="invisible md:visible bg-black after:content-['✨'] after:p-4">Design</span>
                    <span className="invisible md:visible bg-black after:content-['✨'] after:p-4">Mobil</span>
                </div>
            </div>
        </>
    );
}