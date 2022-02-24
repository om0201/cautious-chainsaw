import React from "react";
import styles from "./UserDetails.module.css";
import { FaUserCircle } from "react-icons/fa";

const UserDetails = () => {
  return (
    <div className={styles.card}>
      <FaUserCircle className={styles.icon} />
      <h3 className={styles.username}>demo@devias.io</h3>
      <p className={styles.tier}>
        Your Tier: <span>Premium</span>
      </p>
    </div>
  );
};

export default UserDetails;
