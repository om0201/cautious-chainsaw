import React from "react";
import styles from "./Header.module.css";
import {
  FaChartLine,
  FaSearch,
  FaUserFriends,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <FaChartLine className={styles.icon} />
      </div>

      <nav className={styles.nav_list}>
        <ul>
          <li className={styles.list}>
            <a href="/">
              <FaSearch className={styles.icons} />
            </a>
          </li>
          <li className={styles.list}>
            <a href="/">
              <FaUserFriends className={styles.icons} />
            </a>
          </li>
          <li className={styles.list}>
            <a href="/">
              <FaBell className={styles.icons} />
            </a>
          </li>
          <li className={styles.list}>
            <a href="/">
              <IoSettingsSharp className={styles.icons} />
            </a>
          </li>
          <li className={styles.list}>
            <a className={styles.link} href="/">
              <FaUserCircle className={`${styles.icons}`} />
              <p className={styles.email}> demo@devias.io</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
