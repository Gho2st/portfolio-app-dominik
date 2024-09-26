import classes from "./Contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={classes.container} id='kontakt'>
      <div className={classes.headerContainer}>
        <h2 className={classes.header}>Skontaktuj się ze mną.</h2>
        <h4>Zróbmy razem coś niesamowitego.</h4>
        <p className={classes.welcome}>
          Zacznijmy od <span>powiedzenia hej!</span>
        </p>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.info}>
          <h3>Informacje Kontaktowe</h3>
          <p>dominik.jojczyk@gmail.com</p>
          <p>+48 576 985 894</p>
          <p>Niskowa / Nowy Sącz / Kraków</p>
        </div>
      </div>
    </div>
  );
}
