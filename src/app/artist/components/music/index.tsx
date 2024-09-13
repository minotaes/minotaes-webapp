import React from "react";
import styles from "./music.module.css";

const Music = () => {
  return (
    <div className={styles.container}>
      <section className={styles.photo_stack}>
        {/** TODO IMAGE */}
        <img src="https://f4.bcbits.com/img/a1684753505_65" alt="Image 1" />
        <img
          src="https://ishopmx.vtexassets.com/arquivos/ids/287432/602458698657.jpg?v=638349070715300000"
          alt="Image 2"
        />
        <img
          src="https://i.scdn.co/image/ab67616d0000b2735fa07d78a3d3885ded030cf6"
          alt="Image 3"
        />
      </section>
    </div>
  );
};

export { Music };
