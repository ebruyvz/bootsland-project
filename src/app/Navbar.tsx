export default function Navbar() {
    return (
      <>
        <nav className="flow-root bg-gray-800 fixed top-0 z-10 w-[100%]">
            <a href="https://themeforest.net/item/bootsland-multipurpose-wordpress-theme/44853147?_ga=2.169911968.1625667972.1709010775-1680749170.1708498659">
              <img src="https://d1bltcifwhkdae.cloudfront.net/uploads/envato-market-light.png" alt="envato-logo" className="h-[50px] p-[16px] float-left bg-gray-800" />
            </a>
            <a href="https://themeforest.net/checkout/100569977/create_account?_ga=2.165866046.1625667972.1709010775-1680749170.1708498659">
              <button className="bg-[#8ABC40] hover:bg-[#77a336] float-right text-white m-2 w-[100px] py-2 my-[10px] rounded">Buy now</button>
            </a>
        </nav>
        <div className="fixed top-[60px] z-10 bg-white w-[100%]">
          <div className="flex flex-wrap items-center justify-between py-2.5 px-5">
            <a href="https://bootsland.themeht.com/" className="md:ml-5 ml-[10%]">
              <img src="https://bootsland.themeht.com/wp-content/uploads/2023/03/logo.svg" className="w-fit h-8" />
            </a>
            <div className="flex flex-wrap items-center justify-between gap-8">
              <button className="ring-blue-500 ring-1 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 min-[1000px]:hidden md:fixed right-[200px] top-[66px]">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
              <div className="hidden w-full min-[1000px]:block mim-[1000px]:w-auto">
                <ul className="flex flex-col md:flex-row md:mt-1.5 md:text-md md:space-x-8 fixed block right-[200px] top-[65px]">
                  <ul className="group text-red-500 bg-white">Home
                    <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    <li className="hidden group-hover:block text-white bg-blue-500 p-1">
                      <a href="https://bootsland.themeht.com/">Home</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/home-two/">Home Two</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/home-three/">Home Three</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/home-four/">Home Four</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/home-five/">Home Five</a>
                    </li>
                  </ul>
                  <ul className="group bg-white transition ease-in-out delay-150 duration-300 hover:text-red-500">Pages
                    <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/about-us/">About Us</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/team-member/">Team Member</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/team/biton-leeny/">Team Single</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/faq/">Faq</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/price-table/">Price Table</a>
                    </li>
                  </ul>
                  <ul className="group bg-white transition ease-in-out delay-150 duration-300 hover:text-red-500">Services
                    <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/services/app-development/">App Development</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/services/creative-ui-ux/">Creative UI/UX</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/services/digital-marketing/">Digital Marketing</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/services/software-development/">Software Development</a>
                    </li>
                  </ul>
                  <ul className="group bg-white transition ease-in-out delay-150 duration-300 hover:text-red-500">Portfolio
                    <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/portfolio-grid/">Portfolio Grid</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/portfolio/web-development/">Portfolio Single</a>
                    </li>
                  </ul>
                  <ul className="group bg-white transition ease-in-out delay-150 duration-300 hover:text-red-500">Blog
                    <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/blog-grid-2/">Blog Grid 2</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/blog-grid-3/">Blog Grid 3</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/blog-right-sidebar/">Blog Right Sidebar</a>
                    </li>
                    <li className="hidden group-hover:block group-hover:text-black hover:bg-blue-500 hover:text-white p-1">
                      <a href="https://bootsland.themeht.com/bootsland-perfect-performance-landing-page/">Blog Single</a>
                    </li>
                  </ul>
                  <a href="https://bootsland.themeht.com/contact-us/" className="transition ease-in-out delay-150 duration-300 hover:text-red-500">Contact Us</a>
                </ul>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden md:block md:fixed right-[130px] top-[75px]" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              </div>
              <a href="https://bootsland.themeht.com/#">
                <button className="bg-blue-700 p-3 rounded-md text-white transition ease-in-out delay-150 hover:bg-orange-500 duration-300 hover:text-white hover:border-white active:text-orange-500 hidden md:block md:fixed right-[20px] top-[62px]">Buy Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
}
