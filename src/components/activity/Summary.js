import React from "react";
import styles from "./Summary.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";

const Summary = () => {
  return (
    <div className={styles.container}>
      <section>
        Dashboard <IoIosArrowForward /> Reports
        <h3>Here's what's happening</h3>
      </section>

      <h4 className={styles.days}>
        <AiOutlineCalendar className={styles.calendar} /> LAST 30 DAYS
      </h4>
    </div>
  );
};

export default Summary;
