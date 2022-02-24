import React from "react";
import styles from "./TeamTasks.module.css";
import { BiDotsVerticalRounded } from "react-icons/bi";

const TeamTasks = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Team Tasks</p>

      <a href="/">
        <BiDotsVerticalRounded className={styles.icon} />
      </a>
    </div>
  );
};

export default TeamTasks;
