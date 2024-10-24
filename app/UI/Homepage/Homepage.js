"use client";
import Image from "next/image";
import classes from "./Homepage.module.css";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Header from "../Header";
import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <Header />
        </div>
        <div className={classes.container}>
          <div className={classes.header}>
            {/* Animacja wchodzącego tekstu */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hej, Jestem Dominik!
            </motion.h1>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Tworzę piękne proste rzeczy, I kocham to co robię!
            </motion.p>
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
                <h3>
                  <span className={classes.exp}>2 </span> LATA DOŚWIADCZENIA
                </h3>
              </div>
            </div>
            <div className={classes.imageContainer}>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={"/dominik4.png"}
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="Avatar przedstawiający Dominika Jojczyka wystający z laptopa i machający dłonią"
                ></Image>
              </motion.div>
            </div>
            <div className={classes.rightContainer}>
              {/* Tutaj możesz dodać inne elementy */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
