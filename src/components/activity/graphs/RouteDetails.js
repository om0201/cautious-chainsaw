import React from "react";
import styles from "./RouteDetails.module.css";

const data = [
  {
    route: "/app/projects",
    clicks: "24",
  },
  {
    route: "/app/chat",
    clicks: "21",
  },
  {
    route: "/cart",
    clicks: "15",
  },
  {
    route: "/cart/checkout",
    clicks: "8",
  },
];

const RouteDetails = () => {
  return (
    <div>
      {data.map((r) => (
        <section className={styles.route_container}>
          <p className={styles.route}>{r.route}</p>
          <p className={styles.click}>{r.clicks}</p>
        </section>
      ))}
    </div>
  );
};

export default RouteDetails;
