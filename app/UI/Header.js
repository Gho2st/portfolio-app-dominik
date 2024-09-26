"use client";
import Link from "next/link";
import classes from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function Header() {
  const [isBurgerVisible, setBurgerVisible] = useState(false);

  function clickHandler() {
    setBurgerVisible(!isBurgerVisible);
  }

  function hideMenu() {
    setBurgerVisible(false);
  }

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" }, // Początkowa pozycja poza ekranem
    visible: { opacity: 1, x: 0 }, // Końcowa pozycja na ekranie
    exit: { opacity: 0, x: "100%" }, // Pozycja przy zamknięciu (poza ekranem)
  };

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

      {/* Użycie AnimatePresence do animacji przy otwieraniu i zamykaniu */}
      <AnimatePresence>
        {isBurgerVisible && (
          <motion.nav
            className={classes.navbarMobile}
            initial="hidden" // Stan początkowy
            animate="visible" // Stan po otwarciu
            exit="exit" // Stan przy zamykaniu
            variants={menuVariants} // Animacje zdefiniowane powyżej
            transition={{ duration: 0.3 }} // Czas trwania animacji
          >
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
              <Link onClick={hideMenu} href="#kontakt">
                KONTAKT
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
