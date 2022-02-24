import React from "react";
import styles from "./Aside.module.css";
import UserDetails from "./UserDetails";
import Features from "./features/Features";

const Aside = () => {
  return (
    <aside className={styles.container}>
      <UserDetails />
      <Features />
    </aside>
  );
};

export default Aside;
