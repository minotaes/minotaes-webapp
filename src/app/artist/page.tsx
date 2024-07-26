import React from "react";
import { Header } from "./components";

import styles from "./artist.module.css";
import { Subtitle } from "@/components";

const defaultSubtitleStyle = {
  size: "small" as const,
  color: "primary" as const, // Puede cambiar
};

const Artist = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <Subtitle {...defaultSubtitleStyle}>Eventos</Subtitle>

        <Subtitle {...defaultSubtitleStyle}>Música</Subtitle>
        <Subtitle {...defaultSubtitleStyle}>
          Recomendaciones del artista
        </Subtitle>
      </div>
    </div>
  );
};

export default Artist;
