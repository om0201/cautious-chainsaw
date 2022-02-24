import React from "react";
import styles from "./ActiveUsers.module.css";
import BarGraph from "./BarGraph";
import RouteDetails from "./RouteDetails";
import { IoIosArrowForward } from "react-icons/io";

const ActiveUsers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <section className={styles.header_container}>
          <p className={styles.heading}>Active Users</p>
          <p className={styles.text}>Page views per second</p>
        </section>
        <p className={styles.count}>109</p>
      </div>
      <div className={styles.bargraph_container}>
        <BarGraph />
      </div>
      <RouteDetails />
      <section className={styles.more_info}>
        <p className={styles.para}>SEE ALL</p>
        <span className={styles.icon}>
          <IoIosArrowForward />
        </span>
      </section>
    </div>
  );
};

export default ActiveUsers;
