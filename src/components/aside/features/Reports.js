import React from "react";
import styles from "./Reports.module.css";
import { AiOutlinePieChart } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";

const Reports = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Reports</h4>
      <p className={styles.current_para}>
        <AiOutlinePieChart className={styles.icon} /> Dashboard
      </p>
      <p className={styles.dashboard}>
        <VscGraphLine className={styles.icon} /> Dashboard Alternative
      </p>
    </div>
  );
};

export default Reports;
