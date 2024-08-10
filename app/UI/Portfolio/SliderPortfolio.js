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
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1324,
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
        link="https://github.com/Gho2st/Bioinformatic-Analyse-Dna"
        src="/2.png"
        color="#6F4E37"
        title="Analizator DNA"
        description="Analizator DNA wykonany w ramach projektu bionformatycznego na studia."
      />
      <PortfolioItem
        link="https://www.domiweb.pl/"
        src="/1.png"
        color="#028391"
        title="Domiweb"
        description="Strona agencji webowej na której znajdują się wszystkie moje projekty."
      />
      <PortfolioItem
        link="https://olmart-ns.pl/"
        src="/3.png"
        color="#B5C18E"
        title="Olmart"
        description="Strona internetowa + panel admina dla firmy zduńskiej z Nowego Sącza."
      />
      <PortfolioItem
        link="https://wesolewygibasy.pl/"
        src="/4.png"
        color="#FF70AB"
        title="Wesołe Wygibasy"
        description="Witryna dla sieci krakowskich żłobków."
      />
    </Slider>
  );
}
