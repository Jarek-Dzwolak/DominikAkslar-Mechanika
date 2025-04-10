import React from "react";
import styles from "./Contact.module.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaDirections,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header}>
        <h2>Kontakt</h2>
        <p>Skontaktuj się z nami</p>
      </div>

      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.detail}>
            <div className={styles.icon}>
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3>Adres</h3>
              <p>Dobieszyn 252</p>
              <p>38-460 Jedlicze</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=PM3Q%2BG3+Dobieszyn"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionsButton}
              >
                <FaDirections /> Pokaż trasę
              </a>
            </div>
          </div>

          <div className={styles.detail}>
            <div className={styles.icon}>
              <FaPhoneAlt />
            </div>
            <div>
              <h3>Telefon</h3>
              <p>730 316 934</p>
            </div>
          </div>

          <div className={styles.detail}>
            <div className={styles.icon}>
              <FaClock />
            </div>
            <div>
              <h3>Godziny otwarcia</h3>
              <p>Poniedziałek - Piątek: 8:00 - 18:00</p>
              <p>Sobota: 8:00 - 14:00</p>
              <p>Niedziela: Zamknięte</p>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <div className={styles.mapContainer}>
            <iframe
              title="Lokalizacja warsztatu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.032506099716!2d21.687912600000003!3d49.7039596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQyJzE0LjIiTiAyMcKwNDEnMTYuNSJF!5e1!3m2!1spl!2spl!4v1712747382754!5m2!1spl!2spl"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=PM3Q%2BG3+Dobieszyn"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapDirectionsButton}
            >
              <FaDirections /> Nawiguj do nas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
