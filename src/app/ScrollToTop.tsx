export default function ScrollToTop() {
    return (
        <>
            <a href="#">
                <button className="scroll-smooth fixed bottom-0 right-0 bg-blue-500 rounded-md mr-6 mb-6 w-[60px] h-[60px] z-50 items-center hover:bg-white hover:rounded-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mx-auto my-auto">
                        <path d="M12 2L18 8H6z" fill="black" />
                        <rect x="11" y="8" width="2" height="8" fill="black" className="hover:fill-blue-500" />
                    </svg>
                </button>
            </a>
        </>
    );
}
