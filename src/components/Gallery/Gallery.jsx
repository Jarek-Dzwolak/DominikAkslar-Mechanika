import React, { useState } from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  // Tutaj w prawdziwej implementacji dodasz ścieżki do zdjęć z prac warsztatu
  const images = [
    {
      id: 1,
      src: "/placeholder1.jpg",
      alt: "Serwis samochodowy",
      category: "auto",
    },
    {
      id: 2,
      src: "/placeholder2.jpg",
      alt: "Naprawa motocykla",
      category: "moto",
    },
    { id: 3, src: "/placeholder3.jpg", alt: "Wymiana opon", category: "auto" },
    { id: 4, src: "/placeholder4.jpg", alt: "Detailing", category: "auto" },
    {
      id: 5,
      src: "/placeholder5.jpg",
      alt: "Konserwacja podwozia",
      category: "auto",
    },
    {
      id: 6,
      src: "/placeholder6.jpg",
      alt: "Serwis motocykla",
      category: "moto",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.category === filter);

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.header}>
        <h2>Galeria</h2>
        <p>Zobacz nasze realizacje</p>
      </div>

      <div className={styles.filter}>
        <button
          className={filter === "all" ? styles.active : ""}
          onClick={() => setFilter("all")}
        >
          Wszystkie
        </button>
        <button
          className={filter === "auto" ? styles.active : ""}
          onClick={() => setFilter("auto")}
        >
          Samochody
        </button>
        <button
          className={filter === "moto" ? styles.active : ""}
          onClick={() => setFilter("moto")}
        >
          Motocykle
        </button>
      </div>

      <div className={styles.container}>
        {filteredImages.map((image) => (
          <div key={image.id} className={styles.item}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className={styles.overlay}>
              <div className={styles.info}>
                <h3>{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
