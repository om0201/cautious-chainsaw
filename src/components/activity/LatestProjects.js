import React from "react";
import styles from "./LatestProjects.module.css";
import { BiDotsVerticalRounded } from "react-icons/bi";

const LatestProjects = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Latest Projects</p>

      <a href="/">
        <BiDotsVerticalRounded className={styles.icon} />
      </a>
    </div>
  );
};

export default LatestProjects;
