import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Auto-Moto-Serwis</h1>
        <h2>Profesjonalna obsługa pojazdów</h2>
        <p>Kompleksowe usługi dla samochodów i motocykli</p>
        <div className={styles.buttons}>
          <a href="#services" className="btn btn-primary">
            Nasze usługi
          </a>
          <a href="#contact" className="btn btn-secondary">
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
