import React from "react";
import { Text } from "@/components";
import styles from "./events.module.css";

const Events = () => {
  return (
    <section className={styles.container}>
      <aside className={styles.square}>
        <Text size="xsmall" weight="bold">
          Sep
        </Text>
        <Text size="xsmall">10</Text>
      </aside>
      <div className={styles.details}>
        <Text size="small" weight="bold">
          Morelia, Michoacán
        </Text>
        <Text size="small">Lun 7:00 - Cactux</Text>
      </div>
    </section>
  );
};

export { Events };
