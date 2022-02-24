import React from "react";
import styles from "./Features.module.css";
import Reports from "./Reports";
import Management from "./Management";
import Applications from "./Applications";

const Features = () => {
  return (
    <div className={styles.container}>
      <Reports />
      <Management />
      <Applications />
    </div>
  );
};

export default Features;
