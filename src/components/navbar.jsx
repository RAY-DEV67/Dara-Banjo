import Main from "../assets/main.png";
import { Link } from "react-router-dom"
// import logo from "../assets/logo.png"
import { useState } from "react";

export function Navbar() {
const [showMobile, setshowMobile] = useState(false);

    return ( <div className=" navbar p-[0.5rem]">
        <div className="flex justify-between mx-[1rem]">
        <svg onClick={() => {
            setshowMobile(true)
        }} width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Hamburger_LG"> <path id="Vector" d="M3 17H21M3 12H21M3 7H21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
      <Link to="/" className="flex flex-col items-end">
     <p>FUNKE THE MUSE</p>
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
