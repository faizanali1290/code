import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCreative, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "./styles/Global.css";
import Home from "./Components/Home";
import Drink from "./Components/Drink";
import Cocok from "./Components/cocok";
import Preloader from "./Components/Preloader";
import { AiOutlineHome } from "react-icons/ai";
import Story from "./Components/Story";

SwiperCore.use([EffectCreative, Navigation]);

function App() {
  const [homeBtn, setHomebtn] = useState(true);
  const [CocokBtn, setCocokbtn] = useState(false);
  const [DrinkBtn, setDrinkbtn] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [resize, isResize] = useState("");
  const [scrolling, setScrolling] = useState(false);
  const [checkScroll, setCheckScroll] = useState(false);

  const swiperRef = useRef(null);
  const changeSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  const toggleHome = () => {
    setDrinkbtn(false);
    setHomebtn(true);
    if (checkScroll) {
      setScrolling(false);
    }
    changeSlide(0);
  };

  const toggleCocok = () => {
    setHomebtn(false);
    setCocokbtn(true);
    if (checkScroll) {
      setScrolling(false);
    }
    return changeSlide(1);
  };

  const toggleDrink = () => {
    setCocokbtn(false);
    setDrinkbtn(true);
    if (checkScroll) {
      setScrolling(false);
    }
    return changeSlide(2);
  };

  useEffect(() => {
    const handleResize = () => {
      isResize(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrolling(true);
      setPrevScrollPos(currentScrollPos);

      if (currentScrollPos == 0) {
        return setScrolling(false);
      }
      if (currentScrollPos < "100vh") {
        return setCheckScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, resize]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleContentLoaded = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    window.onload = handleContentLoaded();

    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div id="navigation" style={{ display: scrolling ? "block" : "none" }}>
            <div className="Navigation">
              <div className="Navigation-container">
                {DrinkBtn ? (
                  <AiOutlineHome
                    className={`home-icon`}
                    onClick={toggleHome}
                  ></AiOutlineHome>
                ) : null}
                {homeBtn ? (
                  <span className={`cocok-icon`} onClick={toggleCocok}>
                    🍽️
                  </span>
                ) : null}
                {CocokBtn ? (
                  <img
                    onClick={toggleDrink}
                    src="./assest/images/drink.png"
                    alt="navigation icon"
                    className="drink"
                  />
                ) : null}
                <img
                  src="./assest/images/info.jpg"
                  alt="info"
                  className="info"
                />
                <img
                  src="./assest/images/cart .png"
                  alt="addto cart"
                  className="cart"
                />
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="top-bar">
              <Story changeSlide={changeSlide}></Story>
            </div>
            <Swiper
              ref={swiperRef}
              className="mySwiper"
              autoHeight={true}
              grabCursor={false}
              speed={600}
              slidesPerView={1}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["0", 0, 0],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              navigation={{ clickable: false }}
            >
              <SwiperSlide>
                <Home SaladsPage={toggleCocok} DrinkPage={toggleDrink}></Home>
                <div
                  className="navigation-bar"
                  style={{ display: scrolling ? "none" : "block" }}
                >
                  <div className="Navigation">
                    <div className="Navigation-container">
                      {DrinkBtn ? (
                        <AiOutlineHome
                          className={`home-icon`}
                          onClick={toggleHome}
                        ></AiOutlineHome>
                      ) : null}
                      {homeBtn ? (
                        <span className={`cocok-icon`} onClick={toggleCocok}>
                          🍽️
                        </span>
                      ) : null}
                      {CocokBtn ? (
                        <img
                          onClick={toggleDrink}
                          src="./assest/images/drink.png"
                          alt="navigation icon"
                          className="drink"
                        />
                      ) : null}
                      <img
                        src="./assest/images/info.jpg"
                        alt="info"
                        className="info"
                      />
                      <img
                        src="./assest/images/cart .png"
                        alt="addto cart"
                        className="cart"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <Cocok></Cocok>
                <div
                  className="navigation-bar"
                  style={{ display: scrolling ? "none" : "block" }}
                >
                  <div className="Navigation">
                    <div className="Navigation-container">
                      {DrinkBtn ? (
                        <AiOutlineHome
                          className={`home-icon`}
                          onClick={toggleHome}
                        ></AiOutlineHome>
                      ) : null}
                      {homeBtn ? (
                        <span className={`cocok-icon`} onClick={toggleCocok}>
                          🍽️
                        </span>
                      ) : null}
                      {CocokBtn ? (
                        <img
                          onClick={toggleDrink}
                          src="./assest/images/drink.png"
                          alt="navigation icon"
                          className="drink"
                        />
                      ) : null}
                      <img
                        src="./assest/images/info.jpg"
                        alt="info"
                        className="info"
                      />
                      <img
                        src="./assest/images/cart .png"
                        alt="addto cart"
                        className="cart"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Drink />
                <div
                  className="navigation-bar"
                  style={{ display: scrolling ? "none" : "block" }}
                >
                  <div className="Navigation">
                    <div className="Navigation-container">
                      {DrinkBtn ? (
                        <AiOutlineHome
                          className={`home-icon`}
                          onClick={toggleHome}
                        ></AiOutlineHome>
                      ) : null}
                      {homeBtn ? (
                        <span className={`cocok-icon`} onClick={toggleCocok}>
                          🍽️
                        </span>
                      ) : null}
                      {CocokBtn ? (
                        <img
                          onClick={toggleDrink}
                          src="./assest/images/drink.png"
                          alt="navigation icon"
                          className="drink"
                        />
                      ) : null}
                      <img
                        src="./assest/images/info.jpg"
                        alt="info"
                        className="info"
                      />
                      <img
                        src="./assest/images/cart .png"
                        alt="addto cart"
                        className="cart"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )}
    </>
  );
}

export default App;
