import React from "react";
import { MainTitle, Social } from "@/components";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.image}>
        {/* TODO: cambiar por Image */}
        <img
          src="https://www.neo2.com/wp-content/uploads/2021/10/Bratty-entrevista-bedroom-pop-mexico-tdbn-foto-3.jpg"
          alt="bratty"
        />
      </div>
      <div className={styles.text}>
        <Social />
        <MainTitle color="primary" size={"large"}>
          Bratty
        </MainTitle>
      </div>
    </header>
  );
};

export { Header };
