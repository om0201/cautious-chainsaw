import React from "react";
import styles from "./Applications.module.css";
import { FaBriefcase } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import Details from "./Details";

const Applications = () => {
  return (
    <div className={styles.container}>
      <h4>Applications</h4>
      <Details
        headingIcon={<FaBriefcase className={styles.icon} />}
        heading="Projects Platform"
        listItems={
          <>
            <li>Product-hunt</li>
            <li>App Store</li>
            <li>Windows Store</li>
          </>
        }
      />

      <Details
        headingIcon={<BiShareAlt className={styles.icon} />}
        heading="Social Platform"
        listItems={
          <>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </>
        }
      />
    </div>
  );
};

export default Applications;
