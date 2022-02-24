import React from "react";
import styles from "./Health.module.css";

const Health = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>SYSTEM HEALTH</p>
      <h3 className={styles.number}>
        97% <div className={styles.bar}></div>
      </h3>
    </div>
  );
};

export default Health;
