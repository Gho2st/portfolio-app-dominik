import classes from "./ServiceItem.module.css";

export default function ServiceItem(props) {
  return (
    <div className={classes.container}>
      <div
        className={classes.iconContainer}
        style={{ background: props.background }}
      >
        {props.icon}{" "}
      </div>
      <div className={classes.headerContainer}>
        <h2>{props.title}</h2>
        <p>{props.projects}</p>
      </div>
    </div>
  );
}
