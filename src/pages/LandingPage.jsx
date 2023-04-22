import Main from "../assets/funkemain.jpg";
import funkenew1 from "../assets/funkenew1.webp";
import funkenew2 from "../assets/funkenew2.webp";
import funkenew3 from "../assets/funkenew3.webp";
import funke from "../assets/funke.jpg";
import funke1 from "../assets/funke1.jpg";
import funke2 from "../assets/funke2.jpg";
import funke3 from "../assets/funke3.jpg";
import funke4 from "../assets/funke4.jpg";
import funke5 from "../assets/funke5.jpg";
import funke6 from "../assets/funke6.jpg";
import funke7 from "../assets/funke7.jpg";
import funke8 from "../assets/funke8.jpg";
import funke9 from "../assets/funke9.jpg";
import funke11 from "../assets/funke11.jpg";
import funke12 from "../assets/funke12.jpg";
import funke13 from "../assets/funke13.jpg";
import funke14 from "../assets/funke14.jpg";
import funke15 from "../assets/funke15.jpg";
import funke16 from "../assets/funke16.jpg";
import funke17 from "../assets/funke17.jpg";
import funke18 from "../assets/funke18.jpg";
import funke19 from "../assets/funke19.jpg";
import funke20 from "../assets/funke20.jpg";
import funke21 from "../assets/funke21.jpg";
import funke22 from "../assets/funke22.jpg";
import funke23 from "../assets/funke23.jpg";
import funke24 from "../assets/funke24.jpg";
import funke26 from "../assets/funke26.jpg";
import funke27 from "../assets/funke27.jpg";
import funke28 from "../assets/funke28.jpg";
import funke29 from "../assets/funke29.jpg";
import funke30 from "../assets/funke30.jpg";
import funke31 from "../assets/funke31.jpg";
import funke32 from "../assets/funke32.jpg";
import funke33 from "../assets/funke33.jpg";
import funke34 from "../assets/funke34.jpg";
import funke36 from "../assets/funke36.jpg";
import funke37 from "../assets/funke37.jpg";
import funke40 from "../assets/funke40.jpg";
import funke41 from "../assets/funke41.jpg";
import funke42 from "../assets/funke42.jpg";
import funke43 from "../assets/funke43.jpg";
import funke45 from "../assets/funke45.jpg";
import funke46 from "../assets/funke46.jpg";
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
        <div className="welcometext h-[100vh] flex flex-col items-center justify-end">
          <TextAnimatedDiv>
            <div className="overlay py-[1rem] w-[90vw] lg:w-[40vw]">
              <p className="welcomefont text-[7vw] lg:text-[3vw] text-[#d9d9d9] text-center">
                IT'S
              </p>
              <p className="text-center text-[7vw] lg:text-[3vw] stylesfont font-bold text-white">
                FUNKE THE MUSE
              </p>
              <div className="flex flex-col items-center">
                <p className=" text-[#d9d9d9] text-center w-[60%]">
                  A professional beauty and fashion model with a captivating
                  presence both on and off camera. With her stunning looks and
                  unique sense of style, Funke has become one of the most
                  sought-after models in Nigeria and beyond.
                </p>
                <p className=" text-[#d9d9d9] text-center w-[60%]">
                  If you are looking to working with a passionate professional,
                  then drop me a message or give me a call
                </p>
              </div>

              <a
                href="https://www.instagram.com/direct/t/340282366841710300949128115078988223791"
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
            </div>
          </TextAnimatedDiv>
        </div>
        {/* <div className="overlay2 absolute top-0 h-[100%] w-[100vw]"></div> */}
      </div>
      <div className="mt-[2rem]">
        <h2 className="text-center text-3xl lg:text-[4rem] lg:mb-[1rem] welcomefont">
          LOOK BOOK
        </h2>
        <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funkenew1}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funkenew2}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funkenew3}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke1}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke24}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke2}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke3}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke4}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke5}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke6}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke7}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke8}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke9}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>

          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke11}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke12}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke13}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke14}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke15}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke16}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke17}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke18}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke19}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke20}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke21}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke22}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke23}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke27}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
        </div>
        <div className="flex flex-col items-center">
          <div className="face1 w-[100vw] lg:w-[80vw] lg:h-[100vh] flex flex-col mt-[1rem] items-center justify-center">
            <TextAnimatedDiv>
              <div className="overlay py-[1rem] w-[90vw]">
                <p className="welcomefont text-[7vw] lg:text-[3vw] text-[#d9d9d9] text-center">
                  Your brand needs a face
                </p>
              </div>
            </TextAnimatedDiv>
          </div>
          <div className="face2 w-[100vw] lg:w-[80vw] lg:h-[100vh] flex flex-col items-center justify-center">
            <TextAnimatedDiv>
              <div className="overlay py-[1rem] w-[90vw]">
                <p className="welcomefont text-[7vw] lg:text-[3vw] text-[#d9d9d9] text-center">
                  And i've got a beautiful one
                </p>
              </div>
            </TextAnimatedDiv>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-[1rem] items-center justify-center">
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke43}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke26}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke28}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke29}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke30}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke31}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>

          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke32}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke33}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke34}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke36}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke37}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={Main}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke40}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke42}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke41}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke42}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke45}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="bg-[#d9d9d9] w-[45vw] lg:w-[30vw]">
              <img
                src={funke46}
                alt="Funke the muse"
                className="funke lg:h-[80vh] w-[45vw]"
              />
            </div>
          </AnimatedDiv>
        </div>
      </div>

      <div className="h-[100vh] flex flex-col items-center mt-[1rem] text-[#000009] font-bold justify-center footer">
        <div className="flex justify-center items-center">
          <a href="https://www.instagram.com/official_tfo/" target="_Blank">
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
            href="https://twitter.com/thefunkeoguns"
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
          <a href="mailto:funkethemuse@gmail.com" target="_Blank" className="">
            <svg
              width="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@thefunkeoguns"
            target="_Blank"
            className=" mx-[0.3rem]"
          >
            <svg
              width="20px"
              fill="#000000"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>tiktok</title>{" "}
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>{" "}
              </g>
            </svg>
          </a>

          <a
            href="https://web.facebook.com/Thefunke.oguns/?_rdc=1&_rdr"
            target="_Blank"
            className=""
          >
            <svg
              width="20px"
              viewBox="-5 0 20 20"
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
                <title>facebook [#176]</title> <desc>Created with Sketch.</desc>{" "}
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
                    transform="translate(-385.000000, -7399.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                        id="facebook-[#176]"
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
            href="https://www.youtube.com/channel/UCLNk5OpyR_LlDZ-3Fmy9gag"
            target="_Blank"
            className=" mx-[0.3rem]"
          >
            <svg
              width="20px"
              viewBox="0 -3 20 20"
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
                <title>youtube [#168]</title> <desc>Created with Sketch.</desc>{" "}
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
                    transform="translate(-300.000000, -7442.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                        id="youtube-[#168]"
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
        <div className="">
          <h3 className="text-xl text-center mb-[1rem] mt-[1rem] font-bold">
            For Bookings & Enquires
          </h3>
          <p className="">EMAIL: funkethemuse@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
