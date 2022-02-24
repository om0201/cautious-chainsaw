import React from "react";
import styles from "./Roi.module.css";
import { BiDollar } from "react-icons/bi";

const Roi = () => {
  return (
    <div className={styles.container}>
      <section>
        <p className={styles.heading}>ROI PER CUSTOMER</p>
        <h3 className={styles.amount}>$25.50</h3>
      </section>

      <BiDollar className={styles.logo} />
    </div>
  );
};

export default Roi;
