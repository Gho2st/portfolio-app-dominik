import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.rights}>
        <h6>Dominik</h6>
        <p>@2024 All rights reserved</p>
      </div>
      <div className={classes.autor}>
        Design by Dominik Jojczyk.
      </div>
    </div>
  );
}
