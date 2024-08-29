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
          Możemy razem stworzyć stronę internetową dla Ciebie i twoich Klientów.
          Wspólnie stworzymy wymarzony projekt i wprowadzimy go w życie.
          <br></br>
          Wszelkie sprawy od domeny po hosting biorę na siebie, chętnie wytłumaczę wszelkie kroki jakie podejmuje abyś potem mógł to przekuć na zdrowie swojej witryny.
        </p>
        <p>
          Twoja strona będzie przepiękna, łatwa w obsłudze i przyjazna dla
          Google!
          <br></br><br></br>
          PS: Jezeli chcesz mi zadać jakiekolwiek inne pytanie, jestem na to otwarty!
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
