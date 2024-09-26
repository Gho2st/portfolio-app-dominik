"use client";
import Slider from "react-slick";
import classes from "./SliderPortfolio.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import PortfolioItem from "./PortolioItem";

export default function SliderPortfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={classes.slider}>
      <PortfolioItem
        link="https://eos-ozonowanie.pl/"
        src="/portfolio/eos.png"
        color="#EAD8B1"
        title="EOS Ozonowanie"
        description="Ozonowanie Kraków"
      />
      <PortfolioItem
        link="https://www.hukimuki.pl/"
        src="/portfolio/hukimuki.png"
        color="#A2CA71"
        title="Huki Muki Pub & Club"
        description="Aplikacja webowa dla Huki Muki Pub & Club"
      />
      <PortfolioItem
        link="https://www.domiweb.pl/"
        src="/portfolio/domiweb.png"
        color="#6CBEC7"
        title="DomiWeb"
        description="Strona agencji webowej na której znajdują się wszystkie moje projekty."
      />

      <PortfolioItem
        link="https://olmart-ns.pl/"
        src="/portfolio/olmart.png"
        color="#B99470"
        title="Olmart"
        description="Strona internetowa + panel admina dla zduna"
      />
      <PortfolioItem
        link="https://wesolewygibasy.pl/"
        src="/portfolio/wygibasy.png"
        color="#FF8A8A"
        title="Wesołe Wygibasy"
        description="Witryna dla sieci krakowskich żłobków."
      />
      <PortfolioItem
        link="https://optyk-andrzej.pl/"
        src="/portfolio/optyk.png"
        color="#E5D9F2"
        title="Optyk Kraków"
        description="Witryna dla krakowskiego optyka"
      />
      <PortfolioItem
        link="https://beatalakota.pl/"
        src="/portfolio/beata.png"
        color="#EDDFE0"
        title="Beata Łakota"
        description="Witryna dla Beaty"
      />
    </Slider>
  );
}
