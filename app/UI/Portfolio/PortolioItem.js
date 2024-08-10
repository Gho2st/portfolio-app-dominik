import classes from "./PortfolioItem.module.css";
import Image from "next/image";
import Link from "next/link";
export default function PortfolioItem(props) {
  return (
    <div className={classes.portfolioItem}>
      <Link href={props.link}>
        <div
          className={classes.imageContainer}
          style={{ background: props.color }}
        >
          {/* <Image
            src={props.src}
            width={100}
            height={100}
            layout="responsive"
            className={classes.image}
          ></Image> */}
          <div className={classes.info}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
