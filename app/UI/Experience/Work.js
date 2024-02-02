import classes from "./Work.module.css";

export default function Work() {
  return (
    <div className={classes.container}>
      <h4>Moje doświadczenie</h4>
      <div className={classes.experience}>
        <div className={classes.left}>
          <div className={classes.item}>
            <h5>Bioinformatyka, UKEN - Kraków</h5>
            <p>2022-2025</p>
          </div>
          <div className={classes.item}>
            <h5>MediaMarkt, Kraków</h5>
          </div>
          <div className={classes.item}>
            <h5>Samozatrudnienie - DJJ Software</h5>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.detailsItem}>
            <h5>Studia inzynierskie</h5>
            <p>
              Studiuję bioinformatykę, zdobywając wiedzę z zakresu analizy
              danych biologicznych, programowania w językach takich jak Python i
              R, oraz korzystania z narzędzi bioinformatycznych do przetwarzania
              informacji genetycznych.
            </p>
          </div>
          <div className={classes.detailsItem}>
            <h5>Wsparcie techniczne</h5>
            <p>
              Świadczenie wsparcia informatycznego pierwszej linii,
              specjalizując się w konfiguracji, instalacji oprogramowania na
              komputery i smartfony.
            </p>
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
