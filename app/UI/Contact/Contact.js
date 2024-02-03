import classes from "./Contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h4 className={classes.header}>Zróbmy razem coś niesamowitego.</h4>
        <p className={classes.welcome}>
          Zacznijmy od <span>powiedzenia hej.</span>
        </p>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.info}>
          <h6>Informacje</h6>
          <p>Radzikowskiego 61E/8, Kraków, Polska</p>
        </div>
        <div className={classes.nav}>
          <Link href="#usługi">USŁUGI</Link>
          <Link href="#portfolio">PORTFOLIO</Link>
          <Link href="#doświadczenie">DOŚWIADCZENIE</Link>
        </div>
      </div>
    </div>
  );
}
