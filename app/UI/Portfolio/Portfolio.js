"use client";
import SliderPortfolio from "../SliderPortfolio";
import classes from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <>
      <div className={classes.container} id="portfolio">
        <div className={classes.innerContainer}>
          <div className={classes.header}>
            <h3>Moje ostatnie prace</h3>
            <p>Perfekcyjne rozwiazanie dla wirtualnych doswiadczen</p>
          </div>
          <div className={classes.more}>
            <h5>Odkryj wiecej prac</h5>
          </div>
        </div>
        <div className={classes.portfolio}>
          <SliderPortfolio />
        </div>
      </div>
    </>
  );
}
