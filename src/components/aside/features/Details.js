import React, { useState } from "react";
import styles from "./Details.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Management = ({ headingIcon, heading, listItems }) => {
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);

  const toggleMarker = () => {
    detailsIsOpen ? setDetailsIsOpen(false) : setDetailsIsOpen(true);
  };

  return (
    <details onClick={toggleMarker} className={styles.details}>
      <summary className={styles.list_heading}>
        <p className={styles.name}>
          {headingIcon} {heading}
        </p>
        <span className={styles.marker}>
          {detailsIsOpen ? (
            <IoIosArrowUp className={styles.arrows} />
          ) : (
            <IoIosArrowDown className={styles.arrows} />
          )}
        </span>
      </summary>
      <ul>{listItems}</ul>
    </details>
  );
};

export default Management;
