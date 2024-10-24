import classes from "./PortfolioItem.module.css";
import Image from "next/image";
import Link from "next/link";
export default function PortfolioItem(props) {
  return (
    <div className={classes.portfolioItem} style={{ background: props.color }}>
      <Link href={props.link}>
        <div className={classes.info}>
          <div className={classes.info__background}>
            <h3>{props.title}</h3>
            {/* <p>{props.description}</p> */}
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src={props.src}
            width={100}
            height={100}
            layout="responsive"
            className={classes.image}
          ></Image>
        </div>
      </Link>
    </div>
  );
}
