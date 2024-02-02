import Image from "next/image";
import classes from "./Homepage.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Homepage() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Hej, Jestem Dominik</h1>
          <p>Tworzę piękne proste rzeczy, I kocham to co robię.</p>
        </div>

        <div className={classes.downContainer}>
          <div className={classes.experience}>
            <div className={classes.socialContainer}>
              <h3>Social Media</h3>
              <FaFacebook />
              <FaInstagram />
              <FaGithub />
            </div>
            <div className={classes.innerExperience}>
              <h2>2</h2>
              <h3>YEARS EXPERIENCE</h3>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <Image
              src={"/dominik2.png"}
              width={100}
              height={100}
              layout="responsive"
            ></Image>
          </div>
          <div className={classes.rightContainer}>
          </div>
        </div>
      </div>
    </>
  );
}
