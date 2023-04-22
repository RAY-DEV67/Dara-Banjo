import Main from "../assets/main.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Styles() {
const [style, setstyle] = useState(false);
const [image, setimage] = useState();

    return ( <div>
        <div className="mt-[2rem] mx-[1rem]">
        <h2 className="text-center text-3xl welcomefont">Style Book</h2>
        <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main2)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main3)
            }} />
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Mainc)
            }} />
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className=""  onClick={() => {
              setstyle(true)
              setimage(Main5)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Maina)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Mainb)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main4)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Maind)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Mainf)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Maing)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Maine)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Mainh)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main6)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main8)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main9)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main11)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main12)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main13)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main14)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main15)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main16)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main17)
            }}/>
          </div>
          <div className="bg-[#d9d9d9] w-[40vw]">
            <img src={Main} alt="StylesByKay" className="" onClick={() => {
              setstyle(true)
              setimage(Main18)
            }}/>
          </div>
        </div>
        
     {style ?  <div className="flex flex-col items-center">
      <div className="bg-[#d9d9d9] fixed mx-[1rem] top-[25%] rounded-[10px] modal">
            <img src={image} alt="StylesByKay" className="z-5" />
          </div>
          <p className="fixed top-[27%] left-[85%] z-10 " onClick={() => {
              setstyle(false)
            }}>X</p>
            <div className="overlay fixed top-0 h-[100vh] w-[100vw]"></div>
      </div> : ""}
      </div>
      <div className="mx-[1rem]">
          <h3 className="text-xl mb-[1rem] mt-[1rem] font-bold">
            For Bookings & Enquires
          </h3>
          <p className="">EMAIL: stylesbykayofficial@gmail.com</p>
        </div>
    </div> );
}