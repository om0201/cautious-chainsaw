import React from "react";
import styles from "./Performance.module.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Graph from "./Graph";

const Performance = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <p className={styles.heading}>Performance Over Time</p>
        <BiDotsVerticalRounded className={styles.icon} />
      </section>

      <Graph />
    </div>
  );
};

export default Performance;
