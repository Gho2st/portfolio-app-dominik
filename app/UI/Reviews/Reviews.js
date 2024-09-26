"use client";
import Stars from "../Stars";
import classes from "./Reviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
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
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h2>Opinie Klientów</h2>
          <p>
            Komunikacja to klucz! Jako entuzjasta kodowania, stawiam na
            przyjazne relacje z klientami. Moja filozofia? Bez zbędnych
            tech-jargonek, tylko klarowne rozmowy. Klienci mówią, że to
            współpraca, która łączy pasję z prostotą.
          </p>
        </div>
      </div>
      <div className={classes.reviewContainer}>
        <Slider {...settings} className={classes.slider}>
          <div className={classes.reviewItem}>
            <div className={classes.review}>
              <div>
                <Stars />
              </div>
              <p>
                Jestem bardzo zadowolona z całokształtu wykonanego projektu. Pan
                Dominik jest miłą osobą z poczuciem humoru, widać że ma wiedzę
                niezbędną do wykonywania swojej pracy :)
              </p>
              <div className={classes.line}></div>
              <p className={classes.name}>Milena Głowacka</p>
            </div>
          </div>
          <div className={classes.reviewItem}>
            <div className={classes.review}>
              <div>
                <Stars />
              </div>
              <p>
                Profesjonalna pomoc w doborze hostingu i administracji strony.
              </p>
              <div className={classes.line}></div>
              <p className={classes.name}> Julia Płachecka</p>
            </div>
          </div>
          <div className={classes.reviewItem}>
            <div className={classes.review}>
              <div>
                <Stars />
              </div>
              <p>
                Dzięki stronie internetowej moimi usługami zainteresowało się
                wiele nowych klientów. Strona jest przejrzysta i prosta w
                obsłudze a na tym najbardziej mi zależało. Polecam!
              </p>
              <div className={classes.line}></div>
              <p className={classes.name}>Jakub Oleś</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
