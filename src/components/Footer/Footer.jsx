import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Auto-Moto-Serwis</h2>
          <p>Dominik Akslar</p>
        </div>

        <div className={styles.links}>
          <div className={styles.section}>
            <h3>Nawigacja</h3>
            <ul>
              <li>
                <a href="#hero">Strona Główna</a>
              </li>
              <li>
                <a href="#services">Usługi</a>
              </li>
              <li>
                <a href="#gallery">Galeria</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Kontakt</h3>
            <ul>
              <li>Dobieszyn 252</li>
              <li>38-460 Jedlicze</li>
              <li>Tel: 730 316 934</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Godziny otwarcia</h3>
            <ul>
              <li>Pon - Pt: 8:00 - 18:00</li>
              <li>Sobota: 8:00 - 14:00</li>
              <li>Niedziela: Zamknięte</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {currentYear} Auto-Moto-Serwis Dominik Akslar. Wszelkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
