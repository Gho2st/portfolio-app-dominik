import classes from "./ServiceItem.module.css";

export default function ServiceItem(props) {
  return (
    <div className={classes.container} id="usługi">
      <div
        className={classes.iconContainer}
        style={{ background: props.background }}
      >
        {props.icon}
      </div>
      <div className={classes.headerContainer}>
        <h3>{props.title}</h3>
        <p>{props.projects}</p>
      </div>
    </div>
  );
}
