import React from "react";
import styles from "./Financials.module.css";
import Earnings from "./Earnings";
import Projects from "./Projects";
import Health from "./Health";
import Roi from "./Roi";

const Financials = () => {
  return (
    <div className={styles.container}>
      <Earnings />
      <Projects />
      <Health />
      <Roi />
    </div>
  );
};

export default Financials;
