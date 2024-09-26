"use client";
import SliderPortfolio from "./SliderPortfolio";
import classes from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <>
      <div className={classes.container} id="portfolio">
        <div className={classes.innerContainer}>
          <div className={classes.header}>
            <h2>Moje ostatnie prace</h2>
            <p>Perfekcyjne rozwiązanie dla wirtualnych doświadczeń</p>
          </div>
          <div className={classes.more}>
            {/* <h5>Odkryj wiecej prac</h5> */}
          </div>
        </div>
        <div className={classes.portfolio}>
          <SliderPortfolio />
        </div>
      </div>
    </>
  );
}
