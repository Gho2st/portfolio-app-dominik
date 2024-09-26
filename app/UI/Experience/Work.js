import Link from "next/link";
import classes from "./Work.module.css";

export default function Work() {
  return (
    <div className={classes.container} id="doświadczenie">
      <h2>Moje doświadczenie</h2>
      <div className={classes.experience}>
        <div className={classes.item}>
          <div className={classes.header}>
            <h3>Bioinformatyka, UKEN - Kraków</h3>
            <p>2022-2025</p>
          </div>
          <div className={classes.detailsItem}>
            <h4>Studia inżynierskie</h4>
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
            <h3>MediaMarkt - Kraków</h3>
            <p>2023-2024</p>
          </div>
          <div className={classes.detailsItem}>
            <h4>Wsparcie Techniczne</h4>
            <p>
              Świadczyłem wsparcie pierwszej linii, AD, ticket system, windows
              server, konfiguracja sprzętów firmowych.
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.header}>
            <h3>Realme</h3>
            <p>2024 - cały czas</p>
          </div>
          <div className={classes.detailsItem}>
            <h4>Promotor marki</h4>
            <p>
              Tworzenie pozytywnego obrazu marki Realme przez aktywne promowanie
              jej wartości i innowacyjności w sklepach i innych miejscach
              publicznych.
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.header}>
            <Link href={"https://www.domiweb.pl/"}>
              <h3 className={classes.djjSoftware}>Domiweb - CEO</h3>
            </Link>
            <p>2023-obecnie</p>
          </div>
          <div className={classes.detailsItem}>
            <h4>Działalność Freelancerska</h4>
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
