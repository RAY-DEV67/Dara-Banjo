import moon1 from "../assets/moon1.jpg";
import moon2 from "../assets/moon2.jpg";
import moon3 from "../assets/moon3.jpg";
import moon4 from "../assets/moon4.jpg";
import moon5 from "../assets/moon5.jpg";
import moon6 from "../assets/moon6.jpg";
import moon7 from "../assets/moon7.jpg";
import moon8 from "../assets/moon8.jpg";
import moon9 from "../assets/moon9.jpg";
import moon10 from "../assets/moon10.jpg";
import badboy1 from "../assets/badboy1.jpg";
import badboy2 from "../assets/badboy2.jpg";
import badboy3 from "../assets/badboy3.jpg";
import badboy4 from "../assets/badboy4.jpg";
import badboy5 from "../assets/badboy5.jpg";
import badboy6 from "../assets/badboy6.jpg";
import badboy7 from "../assets/badboy7.jpg";
import badboy8 from "../assets/badboy8.jpg";
import badboy9 from "../assets/badboy9.jpg";
import badboy10 from "../assets/badboy10.jpg";
import wale1 from "../assets/wale1.jpg";
import wale2 from "../assets/wale2.jpg";
import wale3 from "../assets/wale3.jpg";
import wale4 from "../assets/wale4.jpg";
import wale5 from "../assets/wale5.jpg";
import wale6 from "../assets/wale6.jpg";
import wale7 from "../assets/wale7.jpg";
import wale8 from "../assets/wale8.jpg";
import wale9 from "../assets/wale9.jpg";
import wale10 from "../assets/wale10.jpg";
import wale11 from "../assets/wale11.jpg";
import wale12 from "../assets/wale12.jpg";
import wale13 from "../assets/wale13.jpg";
import wale14 from "../assets/wale14.jpg";
import wale15 from "../assets/wale15.jpg";
import wale16 from "../assets/wale16.jpg";
import wale17 from "../assets/wale17.jpg";
import wale18 from "../assets/wale18.jpg";
import wale19 from "../assets/wale19.jpg";
import wale20 from "../assets/wale20.jpg";
import wale21 from "../assets/wale21.jpg";
import wale22 from "../assets/wale22.jpg";
import wale23 from "../assets/wale23.jpg";
import wale24 from "../assets/wale24.jpg";
import wale25 from "../assets/wale25.jpg";
import wale26 from "../assets/wale26.jpg";
import wale27 from "../assets/wale27.jpg";
import wale28 from "../assets/wale28.jpg";
import wale29 from "../assets/wale29.jpg";
import wale30 from "../assets/wale30.jpg";
import wale31 from "../assets/wale31.jpg";
import wale32 from "../assets/wale32.jpg";
import wale33 from "../assets/wale33.jpg";
import wale34 from "../assets/wale34.jpg";
import wale35 from "../assets/wale35.jpg";
import wale36 from "../assets/wale36.jpg";
import wale37 from "../assets/wale37.jpg";
import wale38 from "../assets/wale38.jpg";
import wale39 from "../assets/wale39.jpg";
import wale40 from "../assets/wale40.jpg";
import wale41 from "../assets/wale41.jpg";
import wale42 from "../assets/wale42.jpg";
import wale43 from "../assets/wale43.jpg";
import wale44 from "../assets/wale44.jpg";
import wale45 from "../assets/wale45.jpg";
import wale46 from "../assets/wale46.jpg";
import wale47 from "../assets/wale47.jpg";
import wale48 from "../assets/wale48.jpg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(animatedRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Change this to change when the animation fires
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  return (
    <div className={`${isVisible ? "showhead" : "head"}`} ref={animatedRef}>
      {children}
    </div>
  );
};

const TextAnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(animatedRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Change this to change when the animation fires
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${isVisible ? "showtext text-center" : "text"}`}
      ref={animatedRef}
    >
      {children}
    </div>
  );
};

export function LandingPage() {
  return (
    <div className="bg-[#000009] text-[#f3f3f3]">
      <div className="bg-[#000009] relative">
        <div className="welcometext h-[100vh] flex flex-col items-center justify-center">
        <div className="overlay w-[100vw] absolute top-0 h-[100vh]"></div>
          <TextAnimatedDiv>
            <p className="text-2xl text-[#f9f9f9] font-bold">Waleadebisiphotography</p>
          </TextAnimatedDiv>
          <AnimatedDiv>
          <p className="text-center text-3xl text-[#f9f9f9] mt-[1rem]">PROTFOLIO</p>
            <a
              href="https://www.instagram.com/waleadebisiphotography/"
              target="_Blank"
              className="flex flex-col items-center mt-[1rem]"
            >
              <button
                to="/Styles"
                className="border text-[3vw] bg-[#d9d9d9] border-white font-bold text-black text-xl py-[0.3rem] px-[1rem]"
              >
                Work with me
              </button>
            </a>
          </AnimatedDiv>
        </div>
        {/* <div className="overlay2 absolute top-0 h-[100%] w-[100vw]"></div> */}
      </div>
      <div className="mt-[2rem]">
        <h2 className="text-center text-3xl lg:text-[4rem] lg:mb-[1rem] welcomefont">
          GALLERY
        </h2>
        <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale1}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale2}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale3}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale4}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale5}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale6}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale7}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale8}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale9}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale10}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale11}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale12}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale13}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale14}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale15}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale16}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale17}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale18}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale19}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale20}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale21}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale22}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale23}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale24}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale25}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale26}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale27}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale28}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>

        <TextAnimatedDiv>
          <p className=" text-[7vw] mt-[2rem] lg:text-[3vw] text-[#d9d9d9] text-center">
            Bad Boy The Movie
          </p>
        </TextAnimatedDiv>

        <div className="slider">
          <div className="slide-track">
            {/* SLIDES///// */}

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy1}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy2}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy3}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy4}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy5}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy6}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy7}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy8}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy9}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy10}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            {/* SAME SLIDES (DOUBLED)//////// */}

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy1}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy2}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy3}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy4}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy5}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy6}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy7}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy8}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy9}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={badboy10}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>
          </div>
        </div>

        <TextAnimatedDiv>
          <p className=" text-[7vw] mt-[2rem] lg:text-[3vw] text-[#d9d9d9] text-center">
            On The Moon The Movie
          </p>
        </TextAnimatedDiv>

        <div className="slider">
          <div className="slide-track">
            {/* SLIDES///// */}

            <div className="slide softtools">
              <h5>
                <img
                  src={moon1}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon2}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon3}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon4}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon5}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon6}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon7}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon8}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon9}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon10}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            {/* SAME SLIDES (DOUBLED)//////// */}

            <div className="slide softtools">
              <h5>
                <img
                  src={moon1}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon2}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon3}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon4}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon5}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon6}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon7}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon8}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon9}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>

            <div className="slide softtools">
              <h5>
                <img
                  src={moon10}
                  alt="Wale"
                  className="funke lg:h-[80vh] w-[45vw]"
                />
              </h5>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-[3rem] items-center justify-center">
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale29}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale30}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale31}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale32}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale33}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale34}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale35}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale36}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale37}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale38}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale39}
              alt="wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale40}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale41}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale42}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale43}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale44}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale45}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale46}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale47}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
          <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
            <img
              src={wale48}
              alt="Wale"
              className="funke lg:h-[80vh] w-[45vw]"
            />
          </div>
        </div>
      </div>

      <div className="h-[100vh] flex flex-col items-center mt-[1rem] text-[#000009] font-bold justify-center footer">
      <h3 className="text-xl text-center mb-[1rem] mt-[1rem] font-bold">
            For Bookings & Enquires
          </h3>
        <div className="flex justify-center items-center">
          <a href="https://www.instagram.com/waleadebisiphotography/" target="_Blank">
            <svg
              width="20px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>instagram [#167]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-340.000000, -7439.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                        id="instagram-[#167]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/waleadebisip"
            target="_Blank"
            className="mx-[0.5rem]"
          >
            <svg
              width="20px"
              viewBox="0 -2 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>twitter [#154]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-60.000000, -7521.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                        id="twitter-[#154]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
          </div>
      </div>
    </div>
  );
}
