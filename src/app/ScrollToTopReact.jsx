import React from "react";

export default function ScrollToTop() {
    const [showBtn, setShowBtn] = React.useState(false);
  
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);
    
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <>
            <div>
                {showBtn && (
                    <button className="myBtn" onClick={goToTop}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 2L18 8H6z" fill="white"/>
                            <rect x="11" y="8" width="2" height="8" fill="white"/>
                        </svg>
                    </button>
                )}
            </div>
        </>
    );
}

{/*

.myBtn {
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #2b6cb0;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

*/}