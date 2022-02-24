import React from "react";
import styles from "./Management.module.css";
import { FaUserFriends, FaShoppingCart, FaRegFolder } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import Details from "./Details";

const Management = () => {
  return (
    <div className={styles.container}>
      <h4>Management</h4>
      <Details
        headingIcon={<FaUserFriends className={styles.icon} />}
        heading="Customers"
        listItems={
          <>
            <li>List Customers</li>
            <li>View Customer</li>
            <li>Edit Customer</li>
          </>
        }
      />

      <Details
        headingIcon={<FaShoppingCart className={styles.icon} />}
        heading="Products"
        listItems={
          <>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Semet</li>
          </>
        }
      />

      <Details
        headingIcon={<FaRegFolder className={styles.icon} />}
        heading="Orders"
        listItems={
          <>
            <li>Order #1</li>
            <li>Order #2</li>
            <li>Order #3</li>
            <li>Order #4</li>
          </>
        }
      />

      <Details
        headingIcon={<RiPagesLine className={styles.icon} />}
        heading="Invoices"
        listItems={
          <>
            <li>Invoice #1</li>
            <li>Invoice #2</li>
            <li>Invoice #3</li>
            <li>Invoice #4</li>
          </>
        }
      />
    </div>
  );
};

export default Management;
