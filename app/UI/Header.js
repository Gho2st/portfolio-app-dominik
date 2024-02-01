"use client";
import Link from "next/link";
import classes from "./Header.module.css";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isBurgerVisible, setBurgerVisible] = useState(false);

  function clickHandler() {
    setBurgerVisible(!isBurgerVisible);
    console.log(isBurgerVisible);
  }

  function hideMenu() {
    setBurgerVisible(false);
  }

  return (
    <>
      <div className={classes.container}>
        <motion.div
          className={classes.logoContainer}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link href="/" className={classes.logo}>
            <span className={classes.logoText}>Dominik</span>
          </Link>
        </motion.div>

        {!isBurgerVisible && (
          <>
            <nav className={classes.navbar}>
              <Link className={classes.link} href="/autor">
                SERVICES
              </Link>
              <Link href="/kontakt">WORKS </Link>
              <Link href="/kontakt">NOTES</Link>
              <Link href="/kontakt">EXPERIENCE</Link>
            </nav>
            <p>+48 576 985 894</p>
          </>
        )}
      </div>
      <div className={classes.burgerContainer}>
        <RxHamburgerMenu
          onClick={clickHandler}
          className={classes.burgerMenu}
        />
      </div>

      {isBurgerVisible && (
        <nav className={classes.navbarMobile}>
          <div>
            <Link onClick={hideMenu} href="/autor">
              o Autorze
            </Link>
            <Link href="/kontakt">
              <button onClick={hideMenu} className={classes.button}>
                Kontakt
              </button>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
