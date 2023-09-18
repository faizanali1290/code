import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Pagination, Navigation } from "swiper";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import "../styles/Story.css";

export default function Story({ changeSlide }) {
  const [scrollPosition, setScrollPosition] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [btn, showBtn] = useState(true);
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(-1);

  const handlePrev = () => {
    showBtn(true);
    setCurrentSlide(currentSlide - 1);
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
    showBtn(true);

    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    showBtn(true);
    setCurrentSlide(swiper.activeIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  function showPrevNexBtn() {
    showBtn(!btn);
  }

  return (
    <>
      <>
        <div className="custom-pagination-wrapper">
          <div className="story-icon-container">
            <div className="navigation" onClick={() => goToSlide(0)}>
              <img src="./assest/images/Story-1.png" alt="story icon" />
            </div>
            <div className="navigation" onClick={() => goToSlide(1)}>
              <img src="./assest/images/Story-2.png" alt="story icon" />
            </div>
            <div className="navigation" onClick={() => goToSlide(2)}>
              <img src="./assest/images/Story-3.png" alt="story icon" />
            </div>
            <div className="navigation" onClick={() => goToSlide(3)}>
              <img src="./assest/images/Story-4.png" alt="story icon" />
            </div>
          </div>
        </div>
      </>

      {/* </div> */}

      <Swiper
        style={{
          display: currentSlide === -1 || currentSlide === 4 ? "none" : "block",
        }}
        ref={swiperRef}
        id="swiper"
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, 0],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="swiper-container"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className={`story-card `}>
            <div onClick={showPrevNexBtn}>
              <div className="story-card-heading">
                <img src="./assest/images/Story-1.png" alt="story image" />
                <h2 className="story-title">Dish of the day</h2>
              </div>
              <img
                src="./assest/images/cardstory1.png"
                className="story-card-img"
                alt="story image"
              />
            </div>
            <button
              className="prev-buttonp"
              style={{ opacity: btn ? "0" : "100" }}
              onClick={handlePrev}
            ></button>
            <button
              className="next-buttonp"
              style={{ opacity: btn ? "0" : "100" }}
              onClick={handleNext}
            ></button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`story-card `}>
            <div onClick={showPrevNexBtn}>
              <div className="story-card-heading">
                <img src="./assest/images/Story-2.png" alt="story image" />
                <h2 className="story-title">Chef’s special</h2>
              </div>
              <img
                src="./assest/images/cardstory2.png"
                className="story-card-img"
                alt="story image"
              />
            </div>
            <button
              className="prev-buttonp"
              style={{ opacity: btn ? "0" : "100" }}
              onClick={handlePrev}
            ></button>
            <button
              className="next-buttonp"
              style={{ opacity: btn ? "0" : "100" }}
              onClick={handleNext}
            ></button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`story-card `}>
            <div onClick={showPrevNexBtn}>
              <div className="story-card-heading">
                <img src="./assest/images/Story-3.png" alt="story image" />
                <h2 className="story-title">Quick bites</h2>
              </div>
              <img
                src="./assest/images/cardstory3.png"
                className="story-card-img"
                alt="story image"
              />
            </div>
            <button
              className="prev-buttonp"
              style={{ opacity: btn ? "0" : "100" }}
              onClick={handlePrev}
            ></button>
            <button
              className="next-buttonp"
              style={{ opacity: btn ? "0" : "100" }}
              onClick={handleNext}
            ></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`story-card `}>
            <div onClick={showPrevNexBtn}>
              <div className="story-card-heading">
                <img src="./assest/images/Story-4.png" alt="story image" />
                <h2 className="story-title">Seasonal treats</h2>
              </div>
              <img
                src="./assest/images/cardstory4.png"
                className="story-card-img"
                alt="story image"
              />
            </div>
            <button
              className="prev-buttonp"
              style={{ opacity: btn ? "0" : "100" }}
              onClick={handlePrev}
            ></button>
            <button
              className="next-buttonp"
              style={{ opacity: btn ? "0" : "100" }}
              onClick={handleNext}
            ></button>
          </div>
        </SwiperSlide>
      </Swiper>
      <img
        onClick={() => changeSlide(0)}
        className="logo"
        src="./assest/images/brand logo.png"
        alt="brand logo"
      />
    </>
  );
}
