import React from 'react';

export default function Dropdown() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isHomeOpen, setIsHomeOpen] = React.useState(false);
    const [isPagesOpen, setIsPagesOpen] = React.useState(false);
    const [isServOpen, setIsServOpen] = React.useState(false);
    const [isPortOpen, setIsPortOpen] = React.useState(false);
    const [isBlogOpen, setIsBlogOpen] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    
    return(
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                <img src="https://cdn.icon-icons.com/icons2/1129/PNG/512/menuthreelinesbuttoninterfacesymbol_79952.png" className="butt" />
            </button>
            {isOpen && (
                <div className="dropdown">
                    <button onClick={() => setIsHomeOpen(!isHomeOpen)} className="home">Home</button>
                    {isHomeOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/"><p className="here">Home</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/home-two/"><p>Home Two</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/home-three/"><p>Home Three</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/home-four/"><p>Home Four</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/home-five/"><p>Home Five</p></a>
                        </div>
                    )}
                    <hr />
                    <button onClick={() => setIsPagesOpen(!isPagesOpen)} className="pages">Pages</button>
                    {isPagesOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/about-us/"><p>About Us</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/team-member/"><p>Team Member</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/team/biton-leeny/"><p>Team Single</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/faq/"><p>Faq</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/price-table/"><p>Price Table</p></a>
                        </div>
                    )}
                    <hr />
                    <button onClick={() => setIsServOpen(!isServOpen)} className="services">Services</button>
                    {isServOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/services/app-development/"><p>App Development</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/services/creative-ui-ux/"><p>Creative UI/UX</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/services/digital-marketing/"><p>Digital Marketing</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/services/software-development/"><p>Software Development</p></a>
                        </div>
                    )}
                    <hr />
                    <button onClick={() => setIsPortOpen(!isPortOpen)} className="portfolio">Portfolio</button>
                    {isPortOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/portfolio-grid/"><p>Portfolio Grid</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/portfolio/web-development/"><p>Portfolio Single</p></a>
                        </div>
                    )}
                    <hr />
                    <button onClick={() => setIsBlogOpen(!isBlogOpen)} className="blog">Blog</button>
                    {isBlogOpen && (
                        <div>
                            <a href="https://bootsland.themeht.com/blog-grid-2/"><p>Blog Grid 2</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/blog-grid-3/"><p>Blog Grid 3</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/blog-right-sidebar/"><p>Blog Right Sidebar</p></a>
                            <hr />
                            <a href="https://bootsland.themeht.com/bootsland-perfect-performance-landing-page/"><p>Blog Single</p></a>
                        </div>
                    )}
                    <hr />
                    <a href="https://bootsland.themeht.com/contact-us/"><button className="contact">Contact Us</button></a>
                </div>
            )}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="search">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden md:block" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
            {isSearchOpen && (
                <div className="search-div">
                    <input placeholder="Search Here" />
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="close">X</button>
                </div>
            )}
        </div>
    );
}

{/*

.butt {
  width: 50px;
  position: fixed;
  right: 100px;
  top: 20px;
  background: transparent;
  border: none;
}

.dropdown {
  display: block;
  position: fixed;
  right: 100px;
  width: 300px;
  top: 60px;
  font-size: 20px;
}

p {
  font-size: 17px;
  padding-left: 10px;
}

.home, .pages, .services, .portfolio, .blog, .contact {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 300px;
  text-align: left;
  background: transparent;
  border: none;
}

.home {
  background: #2b6cb0;
  color: white;
}

.here {
  color: #2b6cb0;
}

a {
  color: black;
}

hr {
  border-bottom: 2px dashed gray;
  margin: 0;
}

.search {
  width: 40px;
  position: fixed;
  right: 50px;
  top: 20px;
  background: transparent;
  border: none;
}

.search-div {
  background: #000435;
  width: 90%;
  margin-left: 5%;
  padding: 50px 20px;
}

input {
  width: 90%;
  margin-left: 5%;
  padding: 20px;
  border-radius: 10px;
  border: transparent;
}

.close {
  background: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: transparent;
  position: fixed;
  top: 15px;
  right: 12%;
}

.close:hover {
  background: blue;
}

*/}

