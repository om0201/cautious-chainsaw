import React from "react";
import styles from "./Projects.module.css";
import { AiOutlineFolder } from "react-icons/ai";

const Projects = () => {
  return (
    <div className={styles.container}>
      <section>
        <p className={styles.heading}>NEW PROJECT</p>
        <h3 className={styles.amount}>12 </h3>
        <small className={styles.percentage}>-10%</small>
      </section>

      <AiOutlineFolder className={styles.logo} />
    </div>
  );
};

export default Projects;
