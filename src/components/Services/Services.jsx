import React from "react";
import styles from "./Services.module.css";
import { FaCar, FaMotorcycle, FaSprayCan, FaTools } from "react-icons/fa";

const Services = () => {
  // Nowy podział usług na 4 kategorie
  const serviceCategories = [
    {
      title: "Auto",
      icon: <FaCar />,
      services: [
        "Wymiana opon z wyważeniem",
        "Wulkanizacja",
        "Serwis zawieszenia",
        "Wymiana płynów eksploatacyjnych",
        "Serwis olejowy",
        "Wymiana filtrów",
        "Wymiana osprzętu silnika",
        "Naprawa układu hamulcowego",
        "Ustawienie luzów zaworowych",
      ],
    },
    {
      title: "Motocykle",
      icon: <FaMotorcycle />,
      services: [
        "Serwis zawieszenia motocykla",
        "Wymiana opon w motocyklach",
        "Naprawa układu hamulcowego",
        "Serwis olejowy",
        "Diagnostyka motocykli",
        "Montaż dodatkowego wyposażenia",
        "Regulacja zaworów",
        "Synchronizacja gaźników/przepustnic",
      ],
    },
    {
      title: "Detailing",
      icon: <FaSprayCan />,
      services: ["Polerowanie lakieru", "Detailing", "Czyszczenie wnętrza"],
    },
    {
      title: "Usługi Dodatkowe",
      icon: <FaTools />,
      services: [
        "Diagnostyka komputerowa",
        "Spawanie",
        "Konserwacja podwozi i profili",
        "Naprawy blacharskie",
        "Malowanie",
        "Piaskowanie",
      ],
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.header}>
        <h2>Nasze Usługi</h2>
        <p>Profesjonalne usługi dla Twojego pojazdu</p>
      </div>

      <div className={styles.container}>
        {serviceCategories.map((category, index) => (
          <div key={index} className={styles.category}>
            <div className={styles.icon}>{category.icon}</div>
            <h3>{category.title}</h3>
            <ul>
              {category.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
