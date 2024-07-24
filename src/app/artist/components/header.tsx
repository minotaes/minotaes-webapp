import React from "react";
import { MainTitle, Social } from "@/components";

import styles from "./header.module.css";

const defaultTextStyle = {
  color: "primary" as const,
};

const Header = () => {
  return (
    <header>
      <div className={styles.image}>
        <img
          src="https://i.scdn.co/image/ab6761610000e5ebdb1e889153a9a882dfd4a18f"
          alt="bratty"
        />
      </div>
      <div className={styles.text}>
        <Social />
        <MainTitle {...defaultTextStyle} size={"large"}>
          Bratty
        </MainTitle>
      </div>
    </header>
  );
};

export default Header;
