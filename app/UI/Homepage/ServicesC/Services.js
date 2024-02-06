import classes from "./Services.module.css";
import ServiceItem from "./ServiceItem";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";

export default function Services() {
  return (
    <div className={classes.serviceContainer}>
      <div className={classes.ServiceItems}>
        <ServiceItem
          icon={<HiOutlineDesktopComputer />}
          title={"Strony internetowe"}
          projects={"10 projektów"}
          background="green"
        />
        <ServiceItem
          icon={<FaMobileAlt />}
          title={"Aplikacje Mobilne"}
          projects={"2 projekty"}
          background="orange"
        />
        <ServiceItem
          icon={<MdOutlineBrandingWatermark />}
          title={"UI/UX Design"}
          projects={"4 projekty"}
          background="red"
        />
      </div>
      <div className={classes.description}>
        <h2>W czym mogę pomóc?</h2>
        <p>
          Oferuję nietypowe strony internetowe, które są jak najnowszy model
          smartfona - nowoczesne, funkcjonalne i urzekające.
        </p>
        <p>
          Twoja strona będzie przepiękna, łatwa w obsłudze i przyjazna dla
          Google!
        </p>
        <div className={classes.info}>
          <div className={classes.infoItem}>
            <h4>10+</h4>
            <p>Zrealizowane projekty</p>
          </div>
          <div className={classes.infoItem}>
            <h4>15+</h4>
            <p>Zadowoleni klienci</p>
          </div>
        </div>
      </div>
    </div>
  );
}
