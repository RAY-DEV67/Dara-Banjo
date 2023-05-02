import Main from "../assets/main.png";
import { Link } from "react-router-dom"
// import logo from "../assets/logo.png"
import { useState } from "react";

export function Navbar() {
const [showMobile, setshowMobile] = useState(false);

    return ( <div className=" navbar bg-transparent text-[#f3f3f3] p-[0.5rem]">
        <div className="flex justify-between items-center mx-[1rem]">
        
        <a href="https://www.instagram.com/direct/t/340282366841710300949128115078988223791" target="_Blank" className="flex flex-col items-center"> 
                <button
                  to="/Styles"
                  className="border text-[3vw] bg-[#d9d9d9] border-white font-bold text-black text-xl py-[0.1rem] px-[0.8rem]"
                >
                  Book me
                </button>
              </a>
      <Link to="/" className="flex flex-col items-end">
     <p className="stylesfont">FUNKE THE MUSE</p>
      </Link>
        </div>
        <div
        className={
          showMobile
            ?  "bg-white h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center fixed show"
            : "bg-[#323b0a] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
        }
      >
        <img src={Main} alt="Daiverse" className="absolute nav-image"/>
        <div className={
          showMobile
            ? " h-[100vh] overlay top-0 w-[100vw] flex flex-col items-center justify-center ml-[-1rem] fixed show"
            : "h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
        }></div>
        <p
          className="absolute text-[#d9d9d9] nav top-7 left-[85%]"
          onClick={() => {
            setshowMobile(false)
          }}
        >
          X
        </p>
        <Link to="/" className="nav"  onClick={() => {
            setshowMobile(false);
          }}>
        <p className="text-[6vw] text-[#d9d9d9] font-bold">Home</p>
        </Link>
        <Link to="/Styles" className="nav"  onClick={() => {
            setshowMobile(false);
          }}>
        <p className="text-[6vw] my-[2rem] text-[#d9d9d9] font-bold">Style Book</p>
        </Link>
        <a
          className="text-[6vw] nav text-[#d9d9d9] font-bold"
          href="https://www.instagram.com/stylesbykayofficial/"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Instagram
        </a>
        <a
          className="text-[6vw] mt-[2rem] nav text-[#d9d9d9] font-bold"
          href="#Newsletter"
          onClick={() => {
            setshowMobile(false);
          }}
        >
          Newsletter
        </a>
      </div>

    </div> );
}
