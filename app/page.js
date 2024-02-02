import styles from "./page.module.css";
import Work from "./UI/Experience/Work";
import Header from "./UI/Header";
import Homepage from "./UI/Homepage/Homepage";
import Services from "./UI/Homepage/ServicesC/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Homepage/>
      <Services/>
      <Work/>
    </>
  );
}
