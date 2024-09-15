"use client";
import Link from "next/link";
import classes from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlinePhoneInTalk } from "react-icons/md";

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
      <div className={classes.navbarContainer}>
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
                <Link href="#usługi">USŁUGI</Link>
                <Link href="#portfolio">PORTFOLIO</Link>
                <Link href="#doświadczenie">DOŚWIADCZENIE</Link>
              </nav>
              <a className={classes.phone} href="tel:+48576985894">
                <MdOutlinePhoneInTalk />
              </a>
            </>
          )}
          <div className={classes.burgerContainer}>
            <RxHamburgerMenu
              onClick={clickHandler}
              className={classes.burgerMenu}
            />
          </div>
        </div>
      </div>
      {isBurgerVisible && (
        <nav className={classes.navbarMobile}>
          <div className={classes.mobileNavbar}>
            <button
              onClick={() => {
                setBurgerVisible(!isBurgerVisible);
              }}
            >
              X
            </button>
            <Link onClick={hideMenu} href="#usługi">
              USŁUGI
            </Link>
            <Link onClick={hideMenu} href="#portfolio">
              PORTFOLIO
            </Link>
            <Link onClick={hideMenu} href="#doświadczenie">
              DOŚWIADCZENIE
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
