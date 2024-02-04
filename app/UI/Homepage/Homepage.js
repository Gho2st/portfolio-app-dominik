import Image from "next/image";
import classes from "./Homepage.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Header from "../Header";

export default function Homepage() {
  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <Header />
          {/* <div className={classes.line}></div> */}
        </div>
        <div className={classes.container}>
          <div className={classes.header}>
            <h1>Hej, Jestem Dominik</h1>
            <p>Tworzę piękne proste rzeczy, I kocham to co robię.</p>
          </div>

          <div className={classes.downContainer}>
            <div className={classes.experience}>
              <div className={classes.socialContainer}>
                <h3>Social Media</h3>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100001548255715"
                  }
                >
                  <FaFacebook />
                </Link>
                <Link href={"https://www.instagram.com/dominik_jojczyk_/"}>
                  <FaInstagram />
                </Link>
                <Link href={"https://github.com/Gho2st"}>
                  <FaGithub />
                </Link>
              </div>
              <div className={classes.innerExperience}>
                <h2>2</h2>
                <h3>LATA DOŚWIADCZENIA</h3>
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
              <Link href={"https://www.djj-software.pl/"}>
                <div className={classes.djjsoftware}>
                  <Image src={"/atom.svg"} width={150} height={150} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
