import React from "react";
import Swiper from "react-id-swiper";
import heroSliderData from "../../data/hero-sliders/hero-slider-one.json";
import HeroSliderOneSingle from "../../components/hero-slider/HeroSliderOneSingle.js";
import SlideBG from "../../images/bg-image.jpg";

const slide1 = {
  backgroundImage: `url(${SlideBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "50vh"
};

const Autoplay = () => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  return (
    <Swiper {...params}>
      <div style={slide1}></div>
    </Swiper>
  );
};

export default Autoplay;
