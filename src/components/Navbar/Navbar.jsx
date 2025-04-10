import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Auto-Moto-Serwis</h1>
          <p>Dominik Akslar</p>
        </div>

        <div className={styles.toggle} onClick={toggleMenu}>
          <span
            className={`${styles.bar} ${isOpen ? styles.active : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${isOpen ? styles.active : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${isOpen ? styles.active : ""}`}
          ></span>
        </div>

        <ul className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
          <li>
            <a href="#hero" onClick={toggleMenu}>
              Strona Główna
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>
              Usługi
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={toggleMenu}>
              Galeria
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
