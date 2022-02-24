import React from "react";
import styles from "./Earnings.module.css";
import { BiDollar } from "react-icons/bi";

const Earnings = () => {
  return (
    <div className={styles.container}>
      <section>
        <p className={styles.heading}>TODAYS MONEY</p>
        <h3 className={styles.amount}>$24,000 </h3>
        <small className={styles.percentage}>+4%</small>
      </section>
      <BiDollar className={styles.logo} />
    </div>
  );
};

export default Earnings;
