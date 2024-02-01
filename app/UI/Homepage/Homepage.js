import Image from "next/image";
import classes from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Hey There, I'm Dominik</h1>
          <p>I design beatifully simple things, And i love what i do.</p>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src={"/dominik2.png"}
            width={100}
            height={100}
            layout="responsive"
          ></Image>
        </div>
      </div>
      <div className={classes.serviceContainer}>

      </div>
    </>
  );
}
