import Link from "next/link";
import classes from "./Work.module.css";

export default function Work() {
  return (
    <div className={classes.container} id="doświadczenie">
      <h4>Moje doświadczenie</h4>
      <div className={classes.experience}>
        <div className={classes.item}>
          <div className={classes.header}>
            <h5>Bioinformatyka, UKEN - Kraków</h5>
            <p>2022-2025</p>
          </div>
          <div className={classes.detailsItem}>
            <h5>Studia inzynierskie</h5>
            <p>
              Studiuję bioinformatykę, zdobywając wiedzę z zakresu analizy
              danych biologicznych, programowania w językach takich jak Python i
              R, oraz korzystania z narzędzi bioinformatycznych do przetwarzania
              informacji genetycznych.
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.header}>
            <h5>MediaMarkt - Kraków</h5>
            <p>2023-2024</p>
          </div>
          <div className={classes.detailsItem}>
            <h5>Wsparcie Techniczne</h5>
            <p>
              Świadczenie wsparcia informatycznego pierwszej linii,
              specjalizując się w konfiguracji, instalacji oprogramowania na
              komputery i smartfony.
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.header}>
            <Link href={"https://www.djj-software.pl/"}>
              <h5 className={classes.djjSoftware}>Djj Software - CEO</h5>
            </Link>
            <p>2023-obecnie</p>
          </div>
          <div className={classes.detailsItem}>
            <h5>Dzialalnosc Freelancerska</h5>
            <p>
              Jako niezależny freelancer specjalizuję się w tworzeniu
              responsywnych stron internetowych z użyciem technologii takich jak
              Next.js i React. Moje usługi obejmują projektowanie i rozwijanie
              interaktywnych interfejsów użytkownika oraz optymalizację
              wydajności stron.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
