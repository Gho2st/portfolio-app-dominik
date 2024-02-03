"use client";
import Slider from "react-slick";
import classes from "./SliderPortfolio.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={classes.slider}>
      <div className={classes.portfolioItem}>
        <div className={classes.imageContainer}>
          <Image
            src={"/1.png"}
            width={100}
            height={100}
            layout="responsive"
            className={classes.image}
          ></Image>
          <div className={classes.info}>
            <h3>Analizator DNA</h3>
            <p>NextJS + Python</p>
          </div>
        </div>
      </div>
      <div className={classes.portfolioItem}>
        <div className={classes.imageContainer}>
          <Image
            src={"/2.png"}
            width={100}
            height={100}
            layout="responsive"
            className={classes.image}
          ></Image>
          <div className={classes.info}>
            <h3>Djj Software</h3>
            <p>NextJS</p>
          </div>
        </div>
      </div>
      <div className={classes.portfolioItem}>
        <div className={classes.imageContainer}>
          <Image
            src={"/3.png"}
            width={100}
            height={100}
            layout="responsive"
            className={classes.image}
          ></Image>
          <div className={classes.info}>
            <h3>Olmart</h3>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}
