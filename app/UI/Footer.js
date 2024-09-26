import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.rights}>
        <p className={classes.name}>Dominik</p>
        <p>2024</p>
      </div>
      <div className={classes.autor}>Wykonanie - Dominik Jojczyk.</div>
    </div>
  );
}
